import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resultData } from '../data/questions';

export default function Results({ results }) {
  const navigate = useNavigate();
  const [email, setEmail]   = useState('');
  const [sent, setSent]     = useState(false);

  const type = results?.type ?? 'conditional';
  const d    = resultData[type];

  if (!results) {
    navigate('/scan');
    return null;
  }

  const handleEmail = () => {
    if (email.trim()) setSent(true);
  };

  return (
    <div className="page fade-in">
      <span className="eyebrow">Amazon FBA · Clarity Scan</span>

      <div className="result-bar" style={{ background: d.accent }} />
      <span className="result-tag" style={{ color: d.accent }}>{d.tag}</span>

      <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1.25rem' }}>
        {d.headline}
      </h1>
      <p className="lead">{d.lead}</p>

      <hr className="divider" />

      <div className="rule-label"><span>What this means</span><div className="rule-line" /></div>
      <p>{d.meaning}</p>

      <div style={{ marginTop: '1.75rem' }}>
        <div className="rule-label"><span>Why you received this result</span><div className="rule-line" /></div>
        <p>{d.why}</p>
      </div>

      <div style={{ marginTop: '1.75rem' }}>
        <div className="rule-label"><span>Where this will test you most</span><div className="rule-line" /></div>
        <div>
          {d.frictions.map(f => (
            <div key={f.t} className="friction-item">
              <div className="friction-title">{f.t}</div>
              <div className="friction-body">{f.b}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* Email capture */}
      <div className="email-section">
        <h3>Save your results</h3>
        <p style={{ fontSize: '13px', marginTop: '0.5rem' }}>
          Receive your result summary by email. Many people revisit this when their
          circumstances change — a retake is always available.
        </p>
        {sent ? (
          <p style={{ fontSize: '13px', color: 'var(--ink-3)', marginTop: '0.75rem', marginBottom: 0 }}>
            Sent. You are welcome to return at any time.
          </p>
        ) : (
          <div className="email-row">
            <input
              className="email-in"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleEmail()}
            />
            <button className="email-btn" onClick={handleEmail}>Send</button>
          </div>
        )}
      </div>

      <hr className="divider" />

      {/* Decision guidance */}
      <div>
        <h3>Decision guidance</h3>
        <div className="result-guidance" style={{ color: d.accent }}>
          {d.guidance}
        </div>
        <p style={{ fontSize: '14px' }}>{d.next}</p>
      </div>

      {/* Next step panel */}
      {type === 'redirect' ? (
        <div className="assess-panel">
          <h3>Redirection Explorer — Free</h3>
          <p style={{ fontSize: '14px', marginTop: '0.75rem' }}>
            Based on your profile, explore business archetypes that tend to fit your
            temperament and constraints more naturally.
          </p>
          <div className="btn-row">
            <button className="btn btn-primary" onClick={() => navigate('/redirect')}>
              Explore alternatives
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/')}>
              Return home
            </button>
          </div>
        </div>
      ) : (
        <div className="assess-panel">
          <h3>Decision Fit Assessment</h3>
          <p style={{ fontSize: '14px', marginTop: '0.75rem' }}>
            This scan shows surface-level alignment. A deeper assessment examines your
            financial risk tolerance, energy constraints, stress response, and decision
            maturity — and produces a Personal Decision Brief you can save and revisit.
          </p>
          <div className="assess-meta">
            <div><div className="meta-label">Time</div><div className="meta-val">20–30 minutes</div></div>
            <div><div className="meta-label">Output</div><div className="meta-val">Personal Decision Brief</div></div>
            <div><div className="meta-label">Price</div><div className="meta-val">$49</div></div>
          </div>
          <div className="btn-row" style={{ marginTop: 0 }}>
            <button
              className="btn btn-primary"
              onClick={() => alert('The Decision Fit Assessment will be available shortly. Enter your email above to be notified when it launches.')}
            >
              Continue to full assessment
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/')}>
              Return home
            </button>
          </div>
          <p style={{ fontSize: '12px', marginTop: '1rem', marginBottom: 0, color: 'var(--ink-3)' }}>
            You are also free to stop here. Many people find this level alone provides
            sufficient clarity to make a considered decision.
          </p>
        </div>
      )}

      <div className="disclaimer">
        This scan reflects alignment, not ability. Results represent a snapshot of your
        current situation — not a permanent verdict. You are welcome to retake this
        assessment as your financial position, time structure, or risk tolerance evolves.
      </div>
    </div>
  );
}
