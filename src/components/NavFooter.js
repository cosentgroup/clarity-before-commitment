import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <div
        className="nav-brand"
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      >
        Clarity Before Commitment
        <span className="sub">Advisory</span>
      </div>
      <div className="nav-links">
        <button className="nav-link" onClick={() => navigate('/how-it-works')}>
          How it works
        </button>
        <button className="nav-link" onClick={() => navigate('/philosophy')}>
          Philosophy
        </button>
        <button className="nav-cta" onClick={() => navigate('/amazon-fba')}>
          Take the scan
        </button>
      </div>
    </nav>
  );
}

export function Footer() {
  const navigate = useNavigate();
  return (
    <footer style={{ borderTop: '0.5px solid var(--rule)', marginTop: '4rem' }}>
      <div className="footer">
        <div>
          <div className="footer-brand">Clarity Before Commitment</div>
          <div className="footer-tagline">Understand the business before you choose it.</div>
        </div>
        <div className="footer-links">
          <button className="footer-link" onClick={() => navigate('/how-it-works')}>How it works</button>
          <button className="footer-link" onClick={() => navigate('/philosophy')}>Philosophy</button>
          <button className="footer-link" onClick={() => navigate('/amazon-fba')}>Amazon FBA</button>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} Clarity Before Commitment. This platform provides decision clarity tools, not financial or business advice.
        </div>
      </div>
    </footer>
  );
}
