import React from 'react';
import { useNavigate } from 'react-router-dom';
import { archetypes } from '../data/questions';

export default function Redirect() {
  const nav = useNavigate();
  return (
    <div className="page fade-in">
      <span className="eyebrow">Redirection Explorer</span>
      <h1>A different direction<br />may serve you better</h1>
      <p className="lead">This does not mean entrepreneurship is not for you. It means this particular model is not well aligned.</p>
      <p>Below are business archetypes defined by capital intensity, feedback speed, stress profile, and autonomy level — rather than by specific industry or brand. People with your profile tend to build more durable businesses within these categories.</p>
      <hr className="divider" />
      <div className="rule-label"><span>Archetypes to explore</span><div className="rule-line" /></div>
      {archetypes.map(a => (
        <div key={a.n} className="archetype">
          <div className="archetype-num">{a.n}</div>
          <div>
            <div className="archetype-title">{a.title}</div>
            <div className="archetype-body">{a.body}</div>
          </div>
        </div>
      ))}
      <div className="band band-teal" style={{ marginTop:'3.25rem' }}>
        <blockquote>Clarity doesn't tell you what to do.<br />It helps you stop doing what doesn't fit.</blockquote>
      </div>
      <div className="btn-row" style={{ marginTop:'1rem' }}>
        <button className="btn btn-ghost" onClick={()=>nav('/amazon-fba')}>Try the Amazon FBA scan</button>
        <button className="btn btn-ghost" onClick={()=>nav('/')}>Return home</button>
      </div>
    </div>
  );
}
