import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resultData } from '../data/questions';

export default function Results({ results }) {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [sent,  setSent]  = useState(false);
  const type = results?.type ?? 'conditional';
  const d    = resultData[type];

  if (!results) { nav('/scan'); return null; }

  return (
    <div className="page fade-in">
      <span className="eyebrow">Amazon FBA · Clarity Scan</span>
      <div className="result-bar" style={{ background: d.accent }} />
      <span className="result-tag" style={{ color: d.accent }}>{d.tag}</span>
      <h1 style={{ fontSize:'clamp(1.875rem,4.5vw,2.625rem)', marginBottom:'1.25rem' }}>{d.headline}</h1>
      <p className="lead">{d.lead}</p>

      <hr className="divider" />

      <div className="rule-label"><span>What this means</span><div className="rule-line" /></div>
      <p>{d.meaning}</p>

      <div style={{ marginTop:'1.875rem' }}>
        <div className="rule-label"><span>Why you received this result</span><div className="rule-line" /></div>
        <p>{d.why}</p>
      </div>

      <div style={{ marginTop:'1.875rem' }}>
        <div className="rule-label"><span>Where this will test you most</span><div className="rule-line" /></div>
        {d.frictions.map(f => (
          <div key={f.t} className="friction-item">
            <div className="friction-title">{f.t}</div>
            <div className="friction-body">{f.b}</div>
          </div>
        ))}
      </div>

      <hr className="divider" />

      {/* Email capture */}
      <div className="email-section">
        <h3>Save your results</h3>
        <p className="small" style={{ marginTop:'0.5rem' }}>
          Receive your result summary by email. Many people revisit this when circumstances change —
          a retake is always available.
        </p>
        {sent
          ? <p className="caption" style={{ marginTop:'0.875rem' }}>Sent. You are welcome to return at any time.</p>
          : <div className="email-row">
              <input className="email-in" type="email" placeholder="your@email.com" value={email}
                onChange={e=>setEmail(e.target.value)} onKeyDown={e=>e.key==='Enter'&&email.trim()&&setSent(true)} />
              <button className="email-btn" onClick={()=>email.trim()&&setSent(true)}>Send</button>
            </div>
        }
      </div>

      <hr className="divider" />

      {/* Decision guidance */}
      <div>
        <h3>Decision guidance</h3>
        <div className="result-guidance" style={{ color: d.accent }}>{d.guidance}</div>
        <p>{d.next}</p>
      </div>

      {/* Next-step panel */}
      {type === 'redirect' ? (
        <div className="assess-panel" style={{ background:'var(--slate-lt)', borderColor:'#bdd0de' }}>
          <h3>Redirection Explorer — Free</h3>
          <p style={{ marginTop:'0.875rem' }}>
            Based on your profile, explore business archetypes that tend to fit your temperament
            and constraints more naturally.
          </p>
          <div className="btn-row" style={{ marginTop:'1.5rem' }}>
            <button className="btn btn-primary" onClick={()=>nav('/redirect')}>Explore alternatives</button>
            <button className="btn btn-ghost"   onClick={()=>nav('/')}>Return home</button>
          </div>
        </div>
      ) : (
        <div className="assess-panel">
          <h3>Decision Fit Assessment</h3>
          <p style={{ marginTop:'0.875rem' }}>
            This scan shows surface-level alignment. A deeper assessment examines your financial
            risk tolerance, energy constraints, stress response, and decision maturity — and
            produces a Personal Decision Brief you can save and revisit.
          </p>
          <div className="assess-meta">
            <div><div className="meta-label">Time</div><div className="meta-val">20–30 min</div></div>
            <div><div className="meta-label">Output</div><div className="meta-val">Decision Brief</div></div>
            <div><div className="meta-label">Price</div><div className="meta-val">$49</div></div>
          </div>
          <div className="btn-row" style={{ marginTop:0 }}>
            <button className="btn btn-primary"
              onClick={()=>alert('The Decision Fit Assessment will be available shortly. Enter your email above to be notified when it launches.')}>
              Continue to full assessment
            </button>
            <button className="btn btn-ghost" onClick={()=>nav('/')}>Return home</button>
          </div>
          <p className="caption" style={{ marginTop:'1rem' }}>
            You are also free to stop here. Many people find this level alone provides sufficient
            clarity to make a considered decision.
          </p>
        </div>
      )}

      <div className="disclaimer">
        This scan reflects alignment, not ability. Results represent a snapshot of your current
        situation — not a permanent verdict. You are welcome to retake this assessment as your
        financial position, time structure, or risk tolerance evolves.
      </div>
    </div>
  );
}
