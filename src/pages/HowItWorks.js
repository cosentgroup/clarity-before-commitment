import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HowItWorks() {
  const nav = useNavigate();
  const levels = [
    { n:'01', price:'Free',  time:'~5 minutes',      title:'Clarity Scan',
      body:'A short diagnostic that surfaces obvious misalignment between you and the business model. Not a pass or fail test — a readiness signal. No email required to begin, no obligation to continue.',
      out:'An alignment signal — Promising, Conditional, High-Risk, or Explore Alternatives — with a short explanation of why and a suggested next step.' },
    { n:'02', price:'$49',   time:'20–30 minutes',   title:'Decision Fit Assessment',
      body:'A deeper, more personal evaluation. This examines your financial runway, stress response, working style, timeline expectations, and decision maturity. It asks questions you may not have asked yourself.',
      out:'A Personal Decision Brief — a structured document covering your fit classification, primary friction points, a failure pattern forecast, and clear decision guidance. Designed to be saved and revisited.' },
    { n:'03', price:'$199',  time:'Reference guide', title:'Commitment Roadmap',
      body:'Available only to those whose Level 2 assessment indicates proceeding is appropriate. A decision-aware execution guide — not tactics or motivation. A phased, reality-constrained framework for moving forward without self-sabotage.',
      out:'Six phases from commitment calibration through measured expansion, with decision checkpoints, failure prevention callouts, and explicit conditions for exit.' }
  ];
  return (
    <div className="page fade-in">
      <span className="eyebrow">How it works</span>
      <h1>A decision system,<br />not a course</h1>
      <p className="lead">Three levels designed to give you the right depth of clarity at the right moment.</p>
      <hr className="divider" />
      {levels.map((l, i) => (
        <div key={l.n}>
          <div className="step-row">
            <div className="step-num">{l.n}</div>
            <div>
              <div className="step-meta"><span>{l.price}</span><span>·</span><span>{l.time}</span></div>
              <h2>{l.title}</h2>
              <p>{l.body}</p>
              <div className="step-output"><strong>Output: </strong>{l.out}</div>
            </div>
          </div>
          {i < levels.length - 1 && <hr className="divider" />}
        </div>
      ))}
      <div style={{ textAlign:'center', marginTop:'3rem' }}>
        <button className="btn btn-primary" onClick={() => nav('/scan')}>Start with the free scan</button>
      </div>
    </div>
  );
}
