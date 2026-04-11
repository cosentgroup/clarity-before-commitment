import React from 'react';
import { useNavigate } from 'react-router-dom';
import { archetypes } from '../data/questions';

export default function Redirect() {
  const navigate = useNavigate();
  return (
    <div className="page fade-in">
      <span className="eyebrow">Redirection Explorer</span>
      <h1>A different direction<br />may serve you better</h1>
      <p className="lead">
        This does not mean entrepreneurship is not for you.
        It means this particular model is not well aligned.
      </p>
      <p>
        Below are business archetypes defined by capital intensity, feedback speed, stress
        profile, and autonomy level — rather than by specific industry or brand. People with
        your profile tend to build more durable businesses within these categories.
      </p>

      <hr className="divider" />

      <div className="rule-label"><span>Archetypes to explore</span><div className="rule-line" /></div>
      <div>
        {archetypes.map(a => (
          <div key={a.n} className="archetype">
            <div className="archetype-num">{a.n}</div>
            <div>
              <div className="archetype-title">{a.title}</div>
              <div className="archetype-body">{a.body}</div>
            </div>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <blockquote>
        Clarity doesn't tell you what to do. It helps you stop doing what doesn't fit.
      </blockquote>

      <div className="btn-row" style={{ marginTop: '2.5rem' }}>
        <button className="btn btn-ghost" onClick={() => navigate('/amazon-fba')}>
          Try the Amazon FBA scan
        </button>
        <button className="btn btn-ghost" onClick={() => navigate('/')}>
          Return home
        </button>
      </div>
    </div>
  );
}
