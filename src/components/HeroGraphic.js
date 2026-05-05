import React from 'react';

export default function HeroGraphic() {
  return (
    <svg
      className="hero-graphic"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer rings — expanding circles suggesting clarity */}
      <circle cx="200" cy="200" r="180" stroke="#1e6e5c" strokeWidth="0.75" />
      <circle cx="200" cy="200" r="140" stroke="#1e6e5c" strokeWidth="0.75" />
      <circle cx="200" cy="200" r="100" stroke="#1e6e5c" strokeWidth="1" />
      <circle cx="200" cy="200" r="60"  stroke="#1e6e5c" strokeWidth="1.25" />
      <circle cx="200" cy="200" r="24"  stroke="#1e6e5c" strokeWidth="1.5" />

      {/* Cross-hair axes */}
      <line x1="200" y1="20"  x2="200" y2="380" stroke="#1e6e5c" strokeWidth="0.5" strokeDasharray="3 6" />
      <line x1="20"  y1="200" x2="380" y2="200" stroke="#1e6e5c" strokeWidth="0.5" strokeDasharray="3 6" />

      {/* Diagonal structural lines */}
      <line x1="73"  y1="73"  x2="327" y2="327" stroke="#1e6e5c" strokeWidth="0.4" strokeDasharray="2 8" />
      <line x1="327" y1="73"  x2="73"  y2="327" stroke="#1e6e5c" strokeWidth="0.4" strokeDasharray="2 8" />

      {/* Arc segments — decision path metaphor */}
      <path d="M 200 60 A 140 140 0 0 1 340 200" stroke="#1e6e5c" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 200 340 A 140 140 0 0 1 60 200"  stroke="#1e6e5c" strokeWidth="0.75" strokeLinecap="round" />

      {/* Four corner marks */}
      <rect x="185" y="38"  width="30" height="1.5" fill="#1e6e5c" />
      <rect x="185" y="360" width="30" height="1.5" fill="#1e6e5c" />
      <rect x="38"  y="185" width="1.5" height="30" fill="#1e6e5c" />
      <rect x="360" y="185" width="1.5" height="30" fill="#1e6e5c" />

      {/* Centre point */}
      <circle cx="200" cy="200" r="4" fill="#1e6e5c" />
      <circle cx="200" cy="200" r="8" stroke="#1e6e5c" strokeWidth="1" />
    </svg>
  );
}
