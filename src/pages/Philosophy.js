import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Philosophy() {
  const navigate = useNavigate();
  const refuses = [
    { t: 'Sell dreams', b: "We do not promise financial outcomes, highlight edge cases as norms, or use success stories as representative. If someone wants inspiration, this is not their place." },
    { t: 'Rush decisions', b: "No artificial urgency, no limited-time pressure, no framing of hesitation as fear. We actively normalise pausing, researching, and choosing later." },
    { t: 'Accept bad-fit revenue', b: "We will tell people directly when a business does not match their situation. That is not a weakness — it is the credibility on which this platform depends." },
    { t: 'Function as a first-step course', b: "We help people decide whether to proceed — not just how. Only after clarity is earned do we offer execution guidance." }
  ];

  return (
    <div className="page fade-in">
      <span className="eyebrow">Philosophy</span>
      <h1>Why this exists</h1>
      <p className="lead">
        People don't need more opportunity. They need better decision-making before commitment.
      </p>

      <hr className="divider" />

      <p>
        Clarity Before Commitment exists to help people make sober, informed decisions about
        entering demanding businesses. Many opportunities look simple from the outside and
        punishing from the inside.
      </p>
      <p>
        We provide structured diagnostics and decision frameworks that surface hidden
        requirements, real costs, and personal fit — so people can choose to proceed, pause,
        or redirect with confidence.
      </p>
      <p>We do not sell outcomes. We help people understand what they are committing to.</p>

      <hr className="divider" />

      <div className="rule-label"><span>What we refuse to do</span><div className="rule-line" /></div>
      <div>
        {refuses.map(r => (
          <div key={r.t} className="refuse-row">
            <div className="refuse-title">{r.t}</div>
            <div className="refuse-body">{r.b}</div>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <blockquote>
        Good decisions do not eliminate risk. They ensure the risk you take is understood.
      </blockquote>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <button className="btn btn-primary" onClick={() => navigate('/scan')}>
          Take the free scan
        </button>
      </div>
    </div>
  );
}
