import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FBAPage() {
  const navigate = useNavigate();
  return (
    <div className="page fade-in">
      <span className="eyebrow">Amazon FBA</span>
      <h1>Thinking about<br />Amazon FBA?</h1>
      <p className="lead">
        Before products, suppliers, or software — there is a more important question:
        is this business actually aligned with you?
      </p>

      <hr className="divider" />

      <div>
        <div className="rule-label"><span>The reality</span><div className="rule-line" /></div>
        <h2>Amazon FBA is often presented as simple</h2>
        <p>
          You are usually shown product research screenshots, revenue graphs, and automation
          narratives. Shown far less: capital tied up in inventory for months with no income,
          long feedback loops, margin erosion from advertising costs, platform dependency you
          cannot control, and decision fatigue that accumulates quietly.
        </p>
        <p>
          Amazon FBA can work. But it does not work the same way for everyone — or under
          every set of conditions.
        </p>
      </div>

      <hr className="divider" />

      <div>
        <div className="rule-label"><span>The right question</span><div className="rule-line" /></div>
        <h2>Most people don't ask the right question first</h2>
        <p>
          The question is not "can Amazon FBA be profitable?" The question is: under what
          conditions does this work — and do you realistically meet them?
        </p>
        <p>That is the gap this diagnostic addresses.</p>
      </div>

      <hr className="divider" />

      <div>
        <h3>Clarity Scan — Free</h3>
        <p style={{ marginTop: '0.75rem' }}>
          Nine questions. Approximately five minutes. No email required to begin.
          No pressure to continue.
        </p>
        <p style={{ fontSize: '13px' }}>
          Your result may suggest proceeding carefully, pausing to prepare, or exploring a
          better-suited direction. None of those are failures — they are informed positions.
        </p>
        <div className="btn-row">
          <button className="btn btn-primary" onClick={() => navigate('/scan')}>
            Begin the Clarity Scan
          </button>
          <button className="btn btn-ghost" onClick={() => navigate('/how-it-works')}>
            See all three levels
          </button>
        </div>
      </div>
    </div>
  );
}
