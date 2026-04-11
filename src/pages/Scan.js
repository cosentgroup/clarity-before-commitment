import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions, scoreAnswers, classifyScore } from '../data/questions';

export default function Scan({ setResults }) {
  const [idx, setIdx]         = useState(0);
  const [answers, setAnswers] = useState({});
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const q = questions[idx];

  const pick = (optIdx) => {
    const next = { ...answers, [q.id]: optIdx };
    setAnswers(next);

    setTimeout(() => {
      if (idx < questions.length - 1) {
        setIdx(idx + 1);
      } else {
        setProcessing(true);
        const score = scoreAnswers(next);
        const type  = classifyScore(score);
        setTimeout(() => {
          setResults({ score, type });
          navigate('/results');
        }, 2500);
      }
    }, 260);
  };

  if (processing) {
    return (
      <div className="page fade-in">
        <div className="processing">
          <div className="proc-title">Analysing your responses</div>
          <div className="dots">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
          <div className="proc-sub">
            Evaluating alignment across motivation, capital tolerance,
            time structure, and risk posture.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page fade-in">
      <span className="eyebrow" style={{ marginBottom: '2.5rem', display: 'block' }}>
        Amazon FBA — Clarity Scan
      </span>
      <div className="q-wrap">
        <div className="q-progress">
          {questions.map((_, i) => (
            <div key={i} className={`q-pip${i <= idx ? ' done' : ''}`} />
          ))}
        </div>
        <div className="q-section">{q.section}</div>
        <div className="q-text">{q.text}</div>
        <div className="q-options">
          {q.opts.map((o, i) => (
            <button
              key={i}
              className={`q-opt${answers[q.id] === i ? ' chosen' : ''}`}
              onClick={() => pick(i)}
            >
              <div className="q-marker"><div className="q-dot" /></div>
              {o}
            </button>
          ))}
        </div>
        <div className="q-footer">
          <button
            className="q-back"
            style={{ visibility: idx > 0 ? 'visible' : 'hidden' }}
            onClick={() => idx > 0 && setIdx(idx - 1)}
          >
            ← Back
          </button>
          <span className="q-count">{idx + 1} / {questions.length}</span>
          <span className="q-hint">No right answers</span>
        </div>
      </div>
    </div>
  );
}
