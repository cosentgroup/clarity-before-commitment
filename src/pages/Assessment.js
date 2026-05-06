import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { l2questions, dimensions, scoreL2, classifyL2, generateBrief } from '../data/level2questions';

const SECTION_SIZE = 5; // 5 questions per dimension = 6 sections

export default function Assessment() {
  const [searchParams] = useSearchParams();
  const nav = useNavigate();

  const [phase, setPhase]         = useState('intro');   // intro | questions | processing | brief
  const [dimIdx, setDimIdx]       = useState(0);         // which dimension (0–5)
  const [qIdx, setQIdx]           = useState(0);         // question within dimension
  const [answers, setAnswers]     = useState({});
  const [email, setEmail]         = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [sending, setSending]     = useState(false);
  const [brief, setBrief]         = useState(null);
  const [sessionId] = useState(searchParams.get('session_id'));

  // If no session_id, redirect to payment
  useEffect(() => {
    if (!sessionId) nav('/amazon-fba');
  }, [sessionId, nav]);

  const currentDim    = dimensions[dimIdx];
  const dimQuestions  = l2questions.filter(q => q.dim === currentDim?.id);
  const currentQ      = dimQuestions[qIdx];
  const totalAnswered = Object.keys(answers).length;
  const totalQ        = l2questions.length;
  const overallPct    = Math.round((totalAnswered / totalQ) * 100);

  const pick = (optIdx) => {
    const next = { ...answers, [currentQ.id]: optIdx };
    setAnswers(next);
    setTimeout(() => {
      if (qIdx < dimQuestions.length - 1) {
        setQIdx(qIdx + 1);
      } else if (dimIdx < dimensions.length - 1) {
        setDimIdx(dimIdx + 1);
        setQIdx(0);
      } else {
        // All done
        setPhase('processing');
        setTimeout(() => {
          const scores   = scoreL2(next);
          const fitType  = classifyL2(scores);
          const briefData = generateBrief(fitType, scores.dimensions);
          setBrief({ fitType, scores, ...briefData });
          setPhase('brief');
        }, 3000);
      }
    }, 260);
  };

  const sendBrief = async () => {
    if (!email.trim() || sending) return;
    setSending(true);
    try {
      await fetch('/api/send-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          fitType:          brief.fitType,
          frictions:        brief.frictions,
          executiveSummary: brief.executiveSummary,
          conditions:       brief.conditions
        })
      });
      setEmailSent(true);
    } catch (e) {
      console.error(e);
    } finally {
      setSending(false);
    }
  };

  // ── INTRO ────────────────────────────────────────────────────────────────
  if (phase === 'intro') return (
    <div className="page fade-in">
      <span className="eyebrow">Decision Fit Assessment · Level 2</span>
      <h1>A more personal<br />evaluation</h1>
      <p className="lead">This assessment examines the factors beneath the surface — the ones that determine whether a business becomes rewarding or punishing for a specific person.</p>

      <hr className="divider" />

      <div>
        <div className="rule-label"><span>What this covers</span><div className="rule-line" /></div>
        {dimensions.map((d, i) => (
          <div key={d.id} style={{ display:'grid', gridTemplateColumns:'1.75rem 1fr', gap:'1rem', padding:'1.125rem 0', borderTop: i === 0 ? 'none' : '0.5px solid var(--rule)' }}>
            <div style={{ fontFamily:'var(--serif)', fontSize:'1rem', color:'var(--teal)', paddingTop:'2px' }}>
              {String(i + 1).padStart(2,'0')}
            </div>
            <div>
              <div style={{ fontSize:'15px', fontWeight:600, color:'var(--ink)', marginBottom:'0.25rem' }}>{d.label}</div>
              <div style={{ fontSize:'15px', color:'var(--ink-2)', lineHeight:1.65 }}>{dimensionDesc[d.id]}</div>
            </div>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <div className="band band-surface" style={{ borderRadius:0 }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.5rem' }}>
          {[
            { label:'Questions', val:'30' },
            { label:'Time',      val:'20–30 min' },
            { label:'Output',    val:'Decision Brief' }
          ].map(m => (
            <div key={m.label}>
              <div className="meta-label">{m.label}</div>
              <div className="meta-val">{m.val}</div>
            </div>
          ))}
        </div>
      </div>

      <p style={{ marginTop:'1.75rem', fontSize:'15px', color:'var(--ink-3)' }}>
        Answer based on your current reality, not your aspirations. There are no right answers — only honest ones produce useful results.
      </p>

      <div className="btn-row">
        <button className="btn btn-primary" onClick={() => setPhase('questions')}>
          Begin the assessment
        </button>
      </div>
    </div>
  );

  // ── PROCESSING ───────────────────────────────────────────────────────────
  if (phase === 'processing') return (
    <div className="page fade-in">
      <div className="processing">
        <div className="proc-title">Generating your Decision Brief</div>
        <div className="dots"><div className="dot"/><div className="dot"/><div className="dot"/></div>
        <div className="proc-sub">
          Evaluating six dimensions of fit and composing your Personal Decision Brief.
        </div>
      </div>
    </div>
  );

  // ── QUESTIONS ────────────────────────────────────────────────────────────
  if (phase === 'questions' && currentQ) {
    
    return (
      <div className="page fade-in">
        {/* Overall progress */}
        <div style={{ marginBottom:'2rem' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'0.5rem' }}>
            <span className="eyebrow" style={{ margin:0 }}>
              {currentDim.label}
            </span>
            <span style={{ fontSize:'12px', color:'var(--ink-3)' }}>
              {totalAnswered} of {totalQ}
            </span>
          </div>
          <div style={{ height:'2px', background:'var(--rule)', borderRadius:'1px' }}>
            <div style={{ height:'100%', width:`${overallPct}%`, background:'var(--teal)', borderRadius:'1px', transition:'width 0.4s ease' }} />
          </div>
        </div>

        <div className="q-wrap">
          {/* Dimension pips */}
          <div style={{ display:'flex', gap:'4px', marginBottom:'2rem' }}>
            {dimensions.map((d, i) => (
              <div key={d.id} style={{
                flex:1, height:'3px', borderRadius:'2px',
                background: i < dimIdx ? 'var(--teal)' : i === dimIdx ? 'var(--teal-mid)' : 'var(--rule)',
                opacity: i === dimIdx ? 1 : i < dimIdx ? 0.7 : 1
              }} />
            ))}
          </div>

          <div className="q-section">
            Section {dimIdx + 1} of {dimensions.length} — {currentDim.label}
          </div>
          <div className="q-text">{currentQ.text}</div>
          <div className="q-options">
            {currentQ.opts.map((o, i) => (
              <button key={i}
                className={`q-opt${answers[currentQ.id] === i ? ' chosen' : ''}`}
                onClick={() => pick(i)}
              >
                <div className="q-marker"><div className="q-dot"/></div>
                {o}
              </button>
            ))}
          </div>
          <div className="q-footer">
            <button className="q-back"
              style={{ visibility: (dimIdx > 0 || qIdx > 0) ? 'visible' : 'hidden' }}
              onClick={() => {
                if (qIdx > 0) { setQIdx(qIdx - 1); }
                else if (dimIdx > 0) { setDimIdx(dimIdx - 1); setQIdx(SECTION_SIZE - 1); }
              }}>
              ← Back
            </button>
            <span className="q-count">
              {dimIdx * SECTION_SIZE + qIdx + 1} / {totalQ}
            </span>
            <span className="q-hint">Answer honestly</span>
          </div>
        </div>
      </div>
    );
  }

  // ── BRIEF ────────────────────────────────────────────────────────────────
  if (phase === 'brief' && brief) {
    const { fitType, scores, executiveSummary, frictions, conditions } = brief;
    const accent    = accentMap[fitType];
    const fitLabel  = fitLabelMap[fitType];
    const guidance  = guidanceMap[fitType];

    return (
      <div className="page fade-in">
        <span className="eyebrow">Personal Decision Brief · Amazon FBA</span>
        <div className="result-bar" style={{ background: accent, width:'5rem' }} />
        <span className="result-tag" style={{ color: accent }}>{fitLabel}</span>
        <h1 style={{ fontSize:'clamp(1.875rem,4vw,2.5rem)', marginBottom:'1.25rem' }}>
          {headlineMap[fitType]}
        </h1>

        {/* Executive summary band */}
        <div className="band band-surface" style={{ marginTop:'1.5rem' }}>
          <div className="rule-label"><span>At a glance</span><div className="rule-line" /></div>
          <p className="lead" style={{ fontSize:'1.125rem' }}>{executiveSummary}</p>
        </div>

        <hr className="divider" />

        {/* Dimension scores */}
        <div>
          <div className="rule-label"><span>Dimension profile</span><div className="rule-line" /></div>
          {dimensions.map(d => {
            const score = scores.dimensions[d.id];
            const color = score >= 60 ? 'var(--teal)' : score >= 35 ? 'var(--amber)' : 'var(--red)';
            return (
              <div key={d.id} style={{ display:'grid', gridTemplateColumns:'1fr 3rem', gap:'1rem', alignItems:'center', padding:'0.875rem 0', borderTop:'0.5px solid var(--rule)' }}>
                <div>
                  <div style={{ fontSize:'14px', fontWeight:600, color:'var(--ink)', marginBottom:'0.375rem' }}>{d.label}</div>
                  <div style={{ height:'3px', background:'var(--rule)', borderRadius:'2px' }}>
                    <div style={{ height:'100%', width:`${score}%`, background:color, borderRadius:'2px', transition:'width 0.6s ease' }} />
                  </div>
                </div>
                <div style={{ textAlign:'right', fontSize:'13px', fontWeight:600, color }}>{score}</div>
              </div>
            );
          })}
          <div style={{ borderBottom:'0.5px solid var(--rule)', marginBottom:'0.5rem' }} />
        </div>

        <hr className="divider" />

        {/* Friction points */}
        <div>
          <div className="rule-label"><span>Where this will test you most</span><div className="rule-line" /></div>
          {frictions.map(f => (
            <div key={f.title} className="friction-item">
              <div className="friction-title">{f.title}</div>
              <div className="friction-body">{f.body}</div>
            </div>
          ))}
        </div>

        {/* Conditions */}
        {conditions && (
          <>
            <hr className="divider" />
            <div>
              <div className="rule-label"><span>Conditions that would strengthen your position</span><div className="rule-line" /></div>
              <p>{conditions}</p>
            </div>
          </>
        )}

        <hr className="divider" />

        {/* Decision guidance */}
        <div>
          <h3>Decision guidance</h3>
          <div className="result-guidance" style={{ color: accent }}>{guidance}</div>
          <p>{nextStepMap[fitType]}</p>
        </div>

        {/* Email brief */}
        <div className="assess-panel">
          <h3>Receive this brief by email</h3>
          <p style={{ marginTop:'0.875rem', fontSize:'16px' }}>
            Your Personal Decision Brief will be sent as a formatted document you can save and revisit. Many people share this with a partner or advisor before making a final decision.
          </p>
          {emailSent ? (
            <p style={{ marginTop:'1rem', fontSize:'15px', color:'var(--teal)', fontWeight:500 }}>
              ✓ Brief sent. Check your inbox.
            </p>
          ) : (
            <>
              <div className="email-row" style={{ marginTop:'1.25rem' }}>
                <input className="email-in" type="email" placeholder="your@email.com"
                  value={email} onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendBrief()} />
                <button className="email-btn" onClick={sendBrief} disabled={sending}>
                  {sending ? 'Sending…' : 'Send brief'}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Next step */}
        {fitType !== 'misaligned' && fitType !== 'redirect' && (
          <div style={{ marginTop:'2rem', padding:'2rem', border:'0.5px solid var(--rule)', background:'var(--surface)' }}>
            <h3>Commitment Roadmap — $199</h3>
            <p style={{ marginTop:'0.875rem' }}>
              A phased, decision-aware execution framework available only to those whose assessment suggests proceeding is appropriate.
            </p>
            <div className="btn-row" style={{ marginTop:'1.5rem' }}>
              <button className="btn btn-primary"
                onClick={() => alert('The Commitment Roadmap will be available shortly.')}>
                View the Commitment Roadmap
              </button>
              <button className="btn btn-ghost" onClick={() => nav('/')}>Return home</button>
            </div>
          </div>
        )}

        {(fitType === 'misaligned' || fitType === 'redirect') && (
          <div style={{ marginTop:'2rem' }}>
            <button className="btn btn-ghost" onClick={() => nav('/redirect')}>
              Explore better-fit business models
            </button>
          </div>
        )}

        <div className="disclaimer">
          This brief reflects alignment, not ability. Good decisions do not eliminate risk — they ensure the risk you take is understood.
          Clarity Before Commitment provides decision clarity tools, not financial or business advice.
        </div>
      </div>
    );
  }

  return null;
}

// ── Constants ─────────────────────────────────────────────────────────────

const dimensionDesc = {
  financial:    'Your financial cushion, risk absorption capacity, and relationship with capital at stake.',
  time:         'Your actual available bandwidth — not your ideal — and your self-direction under pressure.',
  psychology:   'Your tolerance for delayed feedback, uncertainty, and operating without external validation.',
  temperament:  'How your natural working style aligns with the analytical, operational nature of this business.',
  expectations: 'Whether your beliefs about timelines, effort, and involvement match the model\'s reality.',
  decision:     'The context and maturity of your decision — deliberate or reactive, considered or impulsive.'
};

const accentMap  = { strong:'#1a7a5e', conditional:'#b07020', risk:'#a83030', misaligned:'#2460a0', redirect:'#2460a0' };
const fitLabelMap = { strong:'Strong Fit', conditional:'Conditional Fit', risk:'High-Risk Fit', misaligned:'Misaligned (for now)', redirect:'Explore Other Directions' };
const guidanceMap = {
  strong:      'Proceed deliberately',
  conditional: 'Proceed with specific conditions addressed first',
  risk:        'Pause and reassess conditions before proceeding',
  misaligned:  'Explore better-suited business models',
  redirect:    'Explore better-suited business models'
};
const headlineMap = {
  strong:      'The conditions for a viable attempt are present',
  conditional: 'This could work — with specific guardrails in place',
  risk:        'Proceeding now would likely create more strain than progress',
  misaligned:  'This model is not a good fit for your current situation',
  redirect:    'A different model would serve you better right now'
};
const nextStepMap = {
  strong:      'Your brief has been generated. If you choose to move forward, the Commitment Roadmap provides a phased execution framework designed to keep you disciplined through the early stages.',
  conditional: 'Address the specific conditions outlined above before committing capital. The Commitment Roadmap is available once those conditions are in place.',
  risk:        'The brief above identifies the specific areas creating the most risk. Consider the Redirection Explorer if you would like to explore business models better suited to your current constraints.',
  misaligned:  'The Redirection Explorer can help identify business models better aligned with your temperament, time, and financial situation.',
  redirect:    'The Redirection Explorer can help identify business models better aligned with your temperament, time, and financial situation.'
};
