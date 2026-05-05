import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroGraphic from '../components/HeroGraphic';

export default function Home() {
  const nav = useNavigate();
  return (
    <div className="page fade-in">

      {/* ── Hero ─────────────────────────────────────── */}
      <div className="hero-wrap">
        <HeroGraphic />
        <span className="eyebrow">Amazon FBA — Now available</span>
        <h1>Clarity Before<br />Commitment</h1>
        <p className="lead" style={{ maxWidth: '520px' }}>
          Most business opportunities don't fail because they don't work. They fail because
          people commit before they understand what they're committing to.
        </p>
        <p style={{ maxWidth: '480px' }}>
          We help serious people slow down, see clearly, and make decisions they won't regret.
        </p>
        <div className="btn-row">
          <button className="btn btn-primary" onClick={() => nav('/amazon-fba')}>
            Start with Amazon FBA
          </button>
          <button className="btn btn-ghost" onClick={() => nav('/how-it-works')}>
            How this works
          </button>
        </div>
      </div>

      <hr className="divider" />

      {/* ── The problem ──────────────────────────────── */}
      <div>
        <div className="rule-label"><span>The problem</span><div className="rule-line" /></div>
        <h2>The internet is very good at selling simplicity</h2>
        <p>
          Every day, you're shown businesses that look straightforward — Amazon FBA, Airbnb,
          food trucks, online stores, passive income models. What is rarely shown is the actual
          workload, the emotional strain, the capital at risk, and the skills required to
          survive the early stages.
        </p>
        <p>
          Most people don't fail because they are lazy. They fail because they misunderstood
          the business.
        </p>
      </div>

      {/* ── Teal band — our approach ──────────────────── */}
      <div className="band band-teal">
        <div className="rule-label"><span>Our approach</span><div className="rule-line" /></div>
        <h2>This is not about motivation. It is about fit.</h2>
        <p>
          Before tactics, tools, or training, there is a more important question: is this
          business a good fit for you — given your time, resources, personality, and tolerance
          for risk?
        </p>
        <p>
          Clarity Before Commitment exists to answer that before money, time, or identity
          are on the line.
        </p>
      </div>

      {/* ── Framework ────────────────────────────────── */}
      <div>
        <div className="rule-label"><span>The framework</span><div className="rule-line" /></div>
        <div className="cards-3">
          {[
            { n:'01', title:'Clarity Scan',            meta:'Free · 5 minutes',    body:'Surface obvious misalignment before it costs anything. A readiness signal, not a test.' },
            { n:'02', title:'Decision Fit Assessment',  meta:'$49 · 25 minutes',   body:'A deeper, personal evaluation of risk, readiness, and fit. Produces a Personal Decision Brief.' },
            { n:'03', title:'Commitment Roadmap',       meta:'$199 · Reference',   body:'A grounded execution framework — only when proceeding is genuinely appropriate.' }
          ].map(s => (
            <div key={s.n}>
              <div className="card-num">{s.n}</div>
              <div className="card-title">{s.title}</div>
              <div className="card-meta">{s.meta}</div>
              <div className="card-body">{s.body}</div>
            </div>
          ))}
        </div>
        <p className="caption" style={{ marginTop: '1.75rem' }}>
          No hype. No guarantees. Just informed decisions.
        </p>
      </div>

      {/* ── Surface band — who this is for ───────────── */}
      <div className="band band-surface">
        <div className="rule-label"><span>Who this is for</span><div className="rule-line" /></div>
        <p>
          People who take decisions seriously, want to understand risk rather than avoid it,
          and would rather pause than commit to the wrong thing.
        </p>
        <div className="not-for">
          <h3>Not for</h3>
          <ul>
            <li>People seeking shortcuts or fast validation</li>
            <li>Anyone who needs reassurance instead of reality</li>
            <li>Those looking for motivation rather than clarity</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <p className="caption" style={{ marginBottom: '1.25rem' }}>
          Additional business models will be added over time.
        </p>
        <button className="btn btn-primary" onClick={() => nav('/amazon-fba')}>
          Start with Amazon FBA — Free
        </button>
      </div>
    </div>
  );
}
