import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Nav() {
  const nav = useNavigate();
  return (
    <nav className="nav">
      <div className="nav-brand" onClick={() => nav('/')}>
        Clarity Before Commitment
        <span className="sub">Advisory</span>
      </div>
      <div className="nav-links">
        <button className="nav-link" onClick={() => nav('/how-it-works')}>How it works</button>
        <button className="nav-link" onClick={() => nav('/philosophy')}>Philosophy</button>
        <button className="nav-cta"  onClick={() => nav('/amazon-fba')}>Take the scan</button>
      </div>
    </nav>
  );
}

export function Footer() {
  const nav = useNavigate();
  return (
    <footer>
      <div className="footer">
        <div>
          <div className="footer-brand">Clarity Before Commitment</div>
          <div className="footer-tagline">Understand the business before you choose it.</div>
        </div>
        <div className="footer-links">
          <button className="footer-link" onClick={() => nav('/how-it-works')}>How it works</button>
          <button className="footer-link" onClick={() => nav('/philosophy')}>Philosophy</button>
          <button className="footer-link" onClick={() => nav('/amazon-fba')}>Amazon FBA</button>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} Clarity Before Commitment.
          This platform provides decision clarity tools, not financial or business advice.
        </div>
      </div>
    </footer>
  );
}
