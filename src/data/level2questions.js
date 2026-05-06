// Level 2 — Decision Fit Assessment
// 30 questions across 6 dimensions
// Each answer carries a weight 0–4 contributing to dimension score

export const dimensions = [
  { id: 'financial',    label: 'Financial Stability & Risk Absorption' },
  { id: 'time',         label: 'Time Reality' },
  { id: 'psychology',   label: 'Psychological Runway' },
  { id: 'temperament',  label: 'Temperament vs Business Nature' },
  { id: 'expectations', label: 'Expectation Calibration' },
  { id: 'decision',     label: 'Decision Maturity' }
];

export const l2questions = [
  // ── DIMENSION 1: Financial Stability & Risk Absorption (Q1–Q5) ──
  {
    id: 'f1', dim: 'financial', n: 1,
    text: 'If this business produced no income for 12 months, what would realistically happen?',
    opts: [
      'It would create a serious financial crisis for me',
      'It would be very stressful and require major lifestyle changes',
      'It would be uncomfortable but manageable with adjustments',
      'I have enough runway to sustain this without significant strain',
      'My finances are structured specifically to allow for this'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'f2', dim: 'financial', n: 2,
    text: 'How do you tend to respond emotionally when you lose money on something you invested in?',
    opts: [
      'It stays with me for a long time and affects my confidence',
      'It is quite difficult and takes time to move past',
      'I feel it, but I can process and move on reasonably well',
      'I treat it as a cost of operating and adjust',
      'I expect losses as part of any serious endeavour'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'f3', dim: 'financial', n: 3,
    text: 'Do you have existing financial obligations — debt, dependents, fixed costs — that limit flexibility?',
    opts: [
      'Yes, significant obligations that leave very little margin',
      'Yes, meaningful obligations that constrain my options',
      'Some obligations, but I have reasonable flexibility around them',
      'Modest obligations that don\'t significantly restrict me',
      'Minimal obligations — I have substantial financial freedom'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'f4', dim: 'financial', n: 4,
    text: 'How clearly have you defined your maximum acceptable loss for this business?',
    opts: [
      'I haven\'t thought about this specifically',
      'I have a vague sense but nothing defined',
      'I have a rough number in mind',
      'I have a clear figure and have planned around it',
      'I have a precise limit with a specific exit plan if reached'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'f5', dim: 'financial', n: 5,
    text: 'How would you stage your investment — would you commit funds gradually or deploy a larger amount upfront?',
    opts: [
      'I would likely deploy most of it upfront to move faster',
      'I\'d put in a significant amount early to get started properly',
      'I\'d try to balance speed with staged deployment',
      'I\'d commit in tranches based on proven milestones',
      'I have a specific staged investment plan already in mind'
    ], w: [0, 1, 2, 3, 4]
  },

  // ── DIMENSION 2: Time Reality (Q6–Q10) ──
  {
    id: 't1', dim: 'time', n: 6,
    text: 'After a demanding day, how often do you still have usable mental energy for focused work?',
    opts: [
      'Rarely — I am usually depleted by the end of the day',
      'Occasionally — maybe once or twice a week',
      'Sometimes — a few times a week if the day wasn\'t too heavy',
      'Often — I can usually find focus in the evenings',
      'Consistently — I protect energy specifically for this'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 't2', dim: 'time', n: 7,
    text: 'How stable and predictable is your current weekly schedule?',
    opts: [
      'Very unpredictable — it changes significantly week to week',
      'Somewhat unstable — regular disruptions',
      'Moderately stable with occasional disruptions',
      'Mostly stable — I can plan reliably most weeks',
      'Very stable — I control my schedule with consistency'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 't3', dim: 'time', n: 8,
    text: 'What would need to be deprioritised to make real time for this business?',
    opts: [
      'Things I\'m not willing to deprioritise',
      'Things that would be genuinely difficult to reduce',
      'Things I could reduce with some effort and adjustment',
      'Lower-priority activities I could readily reduce',
      'I\'ve already identified and begun reducing these things'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 't4', dim: 'time', n: 9,
    text: 'Are there significant personal or professional events coming in the next 12 months that could consume your focus?',
    opts: [
      'Yes — a major life change that will demand most of my attention',
      'Yes — something significant that will require meaningful bandwidth',
      'Possibly — something that may or may not affect my focus',
      'Minor things, but nothing that should significantly disrupt this',
      'No — the next 12 months are unusually clear for me'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 't5', dim: 'time', n: 10,
    text: 'How honestly would you describe your relationship with sustained, independent work?',
    opts: [
      'I struggle significantly without external accountability',
      'I find it difficult — I tend to drift without structure',
      'I manage, but I need some structure to stay consistent',
      'I am reasonably self-directed with most tasks',
      'I am highly self-directed and thrive with autonomy'
    ], w: [0, 1, 2, 3, 4]
  },

  // ── DIMENSION 3: Psychological Runway (Q11–Q15) ──
  {
    id: 'p1', dim: 'psychology', n: 11,
    text: 'How do you typically cope when you have invested significant effort into something with no visible results yet?',
    opts: [
      'I tend to abandon it or significantly question whether to continue',
      'I become anxious and find it hard to stay focused',
      'I push through but it takes a real mental toll',
      'I can sustain it with deliberate effort and self-reminders',
      'I expect this phase and have strategies for navigating it'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'p2', dim: 'psychology', n: 12,
    text: 'When you face an unexpected setback in something you care about, how quickly do you recover your equilibrium?',
    opts: [
      'It can take weeks or longer',
      'Usually several days',
      'A day or two, depending on severity',
      'I typically recover within hours',
      'I recover quickly — setbacks sharpen my focus'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'p3', dim: 'psychology', n: 13,
    text: 'How comfortable are you operating without validation or feedback for extended periods?',
    opts: [
      'Very uncomfortable — I need regular external feedback',
      'Quite difficult — silence makes me doubt my direction',
      'Manageable — I can tolerate it with some difficulty',
      'Fairly comfortable — I trust my own process',
      'Very comfortable — I prefer working with long feedback loops'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'p4', dim: 'psychology', n: 14,
    text: 'How does uncertainty about outcomes affect your decision-making quality?',
    opts: [
      'I tend to freeze or make poor decisions under uncertainty',
      'It noticeably degrades my decision quality',
      'It affects me somewhat but I still function adequately',
      'I can make reasonable decisions despite uncertainty',
      'I make my best decisions under uncertainty — it focuses me'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'p5', dim: 'psychology', n: 15,
    text: 'If people close to you were sceptical of this business, how would that affect your commitment?',
    opts: [
      'It would likely cause me to abandon it',
      'It would significantly undermine my confidence',
      'It would bother me but I\'d probably continue',
      'I\'d consider their perspective but trust my own assessment',
      'It would not materially affect my commitment'
    ], w: [0, 1, 2, 3, 4]
  },

  // ── DIMENSION 4: Temperament vs Business Nature (Q16–Q20) ──
  {
    id: 'tm1', dim: 'temperament', n: 16,
    text: 'Amazon FBA requires sustained attention to data — keyword research, ad metrics, conversion rates, inventory forecasts. How does that feel?',
    opts: [
      'That sounds genuinely draining and not suited to me',
      'I could do it but it would require real effort to maintain',
      'I\'m neutral — it\'s not exciting but I can sustain it',
      'I\'m comfortable with this kind of analytical work',
      'This is exactly the type of work I find engaging'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'tm2', dim: 'temperament', n: 17,
    text: 'How do you respond when you must make a significant financial decision with incomplete information?',
    opts: [
      'I tend to delay or avoid the decision',
      'I make it reluctantly and often second-guess myself',
      'I manage, though it creates noticeable discomfort',
      'I can make the call reasonably well and move on',
      'I am comfortable making high-stakes calls under ambiguity'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'tm3', dim: 'temperament', n: 18,
    text: 'Would you still pursue this business if it wasn\'t something you could openly discuss or be admired for?',
    opts: [
      'Probably not — the social dimension matters to me',
      'It would meaningfully reduce my motivation',
      'It would matter somewhat but wouldn\'t stop me',
      'I\'d be indifferent to that aspect',
      'I specifically prefer operating quietly — admiration is irrelevant to me'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'tm4', dim: 'temperament', n: 19,
    text: 'How do you relate to operational repetition — doing the same tasks, checks, and processes consistently over months?',
    opts: [
      'I find it genuinely difficult to sustain',
      'I tend to lose focus and look for change',
      'I can manage it but I need variety to stay motivated',
      'I\'m comfortable with consistent routines',
      'I find operational consistency grounding and productive'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'tm5', dim: 'temperament', n: 20,
    text: 'When a strategy you have invested in stops working, how do you respond?',
    opts: [
      'I tend to defend it longer than I should',
      'It takes me some time to accept and let it go',
      'I can pivot, though it takes deliberate effort',
      'I adjust fairly readily when the evidence is clear',
      'I actively watch for signals and pivot without resistance'
    ], w: [0, 1, 2, 3, 4]
  },

  // ── DIMENSION 5: Expectation Calibration (Q21–Q25) ──
  {
    id: 'e1', dim: 'expectations', n: 21,
    text: 'Which better describes your expectation of the early phase of this business?',
    opts: [
      'A relatively quick ramp to profitability once set up',
      'Some initial friction but solid returns within a few months',
      'A meaningful learning curve with slow early progress',
      'Likely 12+ months of investment before consistent returns',
      'Potentially 18–24 months before meaningful profitability'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'e2', dim: 'expectations', n: 22,
    text: 'How much of Amazon FBA\'s success do you believe depends on finding the "right product"?',
    opts: [
      'Mostly — product selection is the core skill',
      'Significantly — it\'s the most important factor',
      'Importantly, but execution matters equally',
      'It\'s one factor among several equally important ones',
      'Product is a starting point — systems and execution determine results'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'e3', dim: 'expectations', n: 23,
    text: 'What is your expectation for the role of paid advertising in this business?',
    opts: [
      'I expect to minimise it — organic ranking should carry most sales',
      'I\'ll use it selectively when needed',
      'I understand it\'s important but haven\'t learned it yet',
      'I expect it to be a significant and ongoing cost and skill',
      'I understand PPC is central to the model and have begun learning it'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'e4', dim: 'expectations', n: 24,
    text: 'How do you imagine your involvement 12 months in — if the business is working?',
    opts: [
      'Largely hands-off with systems running automatically',
      'Light involvement — a few hours a week reviewing results',
      'Part-time involvement managing key decisions',
      'Regular active management — this will still require real work',
      'Substantial ongoing involvement — I expect to be deeply in it'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'e5', dim: 'expectations', n: 25,
    text: 'How prepared are you for a scenario where your first product fails entirely?',
    opts: [
      'That would likely end my involvement with FBA',
      'It would be very hard to continue after that',
      'I\'d struggle but could probably try again',
      'I\'ve budgeted for this possibility and have a recovery plan',
      'I specifically treat the first product as a learning investment'
    ], w: [0, 1, 2, 3, 4]
  },

  // ── DIMENSION 6: Decision Maturity (Q26–Q30) ──
  {
    id: 'd1', dim: 'decision', n: 26,
    text: 'What primarily drove you to consider Amazon FBA at this particular time?',
    opts: [
      'Frustration with my current situation or desire to escape it',
      'Seeing others succeed and feeling I should act',
      'General interest in additional income',
      'Deliberate research into business options that fit my situation',
      'A considered decision after evaluating multiple alternatives'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'd2', dim: 'decision', n: 27,
    text: 'How would you decide when to stop if this business is not working?',
    opts: [
      'I haven\'t defined this — I\'d know it when I felt it',
      'I have a rough sense but nothing specific',
      'I have general criteria in mind',
      'I have specific milestones that would trigger a review',
      'I have clear, pre-defined exit conditions with specific metrics'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'd3', dim: 'decision', n: 28,
    text: 'How do you typically handle sunk costs — money or time already spent — when evaluating whether to continue?',
    opts: [
      'I find it very hard to walk away from what I\'ve already invested',
      'Past investment significantly influences my continuation decisions',
      'I try to ignore it but it still affects my thinking',
      'I can mostly separate past investment from forward decisions',
      'I evaluate continuation purely on future merit — past cost is irrelevant'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'd4', dim: 'decision', n: 29,
    text: 'Have you seriously explored at least two or three alternative business models before settling on Amazon FBA?',
    opts: [
      'No — this is the first thing I\'ve focused on',
      'I\'ve thought briefly about alternatives but not seriously',
      'I\'ve considered one or two others at a surface level',
      'I\'ve genuinely evaluated two or three alternatives',
      'Yes — I arrived here after seriously considering several options'
    ], w: [0, 1, 2, 3, 4]
  },
  {
    id: 'd5', dim: 'decision', n: 30,
    text: 'How would you describe the emotional tone of this decision right now?',
    opts: [
      'Excited — I mostly want to get started',
      'Hopeful — I believe this could work out well',
      'Curious — I\'m genuinely exploring whether this fits',
      'Cautious — I want to understand fully before deciding',
      'Deliberate — I\'m making a considered decision with clear eyes'
    ], w: [0, 1, 2, 3, 4]
  }
];

// ── Scoring ───────────────────────────────────────────────────────────────

export function scoreL2(answers) {
  const dimScores = {};
  const dimMax    = {};

  l2questions.forEach(q => {
    if (!dimScores[q.dim]) { dimScores[q.dim] = 0; dimMax[q.dim] = 0; }
    dimMax[q.dim] += 4;
    if (answers[q.id] !== undefined) dimScores[q.dim] += q.w[answers[q.id]];
  });

  // Normalise each dimension to 0–100
  const normalised = {};
  Object.keys(dimScores).forEach(d => {
    normalised[d] = Math.round((dimScores[d] / dimMax[d]) * 100);
  });

  // Overall weighted average (financial & psychology weighted slightly higher)
  const weights = { financial:1.3, time:1.1, psychology:1.3, temperament:1.0, expectations:1.1, decision:1.0 };
  let weightedSum = 0, totalWeight = 0;
  Object.keys(normalised).forEach(d => {
    const w = weights[d] || 1;
    weightedSum += normalised[d] * w;
    totalWeight += w;
  });

  const overall = Math.round(weightedSum / totalWeight);
  return { overall, dimensions: normalised };
}

export function classifyL2(scores) {
  const { overall, dimensions: d } = scores;

  // Hard disqualifiers — if financial or psychology is critically low
  if (d.financial < 25 || d.psychology < 25) return 'misaligned';
  if (overall >= 68) return 'strong';
  if (overall >= 45) return 'conditional';
  if (overall >= 28) return 'risk';
  return 'misaligned';
}

// ── Brief generation ──────────────────────────────────────────────────────

export function generateBrief(fitType, dimScores) {
  const { financial: fin, time, expectations: exp, decision: dec } = dimScores;

  // Executive summary
  const summaries = {
    strong: `Your responses indicate meaningful alignment between your current situation and the structural demands of Amazon FBA. The business is not without friction for you, but your financial position, psychological tolerance, and temperament are reasonably matched to what this model requires. Proceeding is rational — provided you remain disciplined about expectations and avoid premature scaling.`,
    conditional: `Your responses show a mixed picture. Several dimensions align reasonably well, while others introduce friction that could compound over time. Amazon FBA could be viable for you, but only if specific conditions are addressed before significant capital is deployed. This brief identifies where the pressure is most likely to appear.`,
    risk: `Your responses suggest that Amazon FBA would likely create more strain than traction under your current circumstances. The combination of constraints identified in this assessment points to meaningful structural friction — not a reflection of your capability, but of the fit between who you are right now and what this particular business model demands.`,
    misaligned: `Your responses indicate a significant mismatch between your current situation and the demands of this business model. This result is not a judgment of your potential — it is a reading of fit. Proceeding under these conditions would likely produce costly overcommitment before the business has a chance to demonstrate whether it works.`
  };

  // Friction points — generated from lowest-scoring dimensions
  const dimLabels = {
    financial: 'Financial exposure and risk absorption',
    time: 'Time and energy availability',
    psychology: 'Psychological tolerance for uncertainty',
    temperament: 'Temperament alignment with operational demands',
    expectations: 'Expectation calibration',
    decision: 'Decision maturity and posture'
  };

  const dimDetails = {
    financial: {
      high: 'Your financial position appears stable enough to absorb the inherent uncertainty of this model without creating structural stress.',
      mid:  'Your financial cushion is workable but not abundant. Staged capital deployment and a clearly defined loss limit will be important risk controls.',
      low:  'Limited financial margin is the primary risk factor in your profile. The capital exposure required before validation may create stress that degrades your decision quality at the moment it matters most.'
    },
    time: {
      high: 'Your time availability and self-direction suggest you can sustain the consistent operational attention this business requires.',
      mid:  'Your available time is real but constrained. Protecting a defined window — and defending it from competing demands — will be critical.',
      low:  'Your current life structure leaves limited reliable bandwidth for this business. Amazon FBA punishes inconsistent attention more than most models.'
    },
    psychology: {
      high: 'Your psychological profile suggests you can navigate the extended periods of ambiguity and delayed feedback this model involves.',
      mid:  'You have reasonable psychological resilience, but the feedback loops in this business are slower than most. Building deliberate practices for managing uncertainty will help.',
      low:  'Slow, indirect feedback is one of this business\'s defining characteristics. Your responses suggest this will be genuinely difficult to sustain without visible progress markers.'
    },
    temperament: {
      high: 'Your working style aligns well with the analytical, iterative nature of FBA operations.',
      mid:  'Your temperament is compatible with this work, though certain operational tasks may require consistent effort to maintain.',
      low:  'The day-to-day nature of Amazon FBA — data analysis, optimisation, operational repetition — conflicts with how you prefer to work. This is a structural issue, not a motivational one.'
    },
    expectations: {
      high: 'Your expectations appear grounded in the actual dynamics of this business. That alignment is more valuable than it may seem.',
      mid:  'Some of your expectations appear optimistic relative to how this model typically performs. Recalibrating timelines and involvement levels before entry will reduce the risk of early disillusionment.',
      low:  'Your expectations contain meaningful gaps relative to the reality of this model. Misaligned expectations are one of the primary causes of premature exit — not because the business fails, but because it doesn\'t look the way people expected.'
    },
    decision: {
      high: 'Your decision posture appears deliberate and considered — you arrived here through a thoughtful process rather than reactive momentum.',
      mid:  'Your decision process shows some deliberateness, though a few elements suggest reactive influence. Clarifying your exit conditions and ensuring you\'ve genuinely evaluated alternatives will strengthen your foundation.',
      low:  'The context of your decision carries some risk. Decisions made from frustration, comparison, or urgency tend to be evaluated differently when the inevitable difficult phases arrive.'
    }
  };

  const frictions = Object.keys(dimScores)
    .sort((a, b) => dimScores[a] - dimScores[b])
    .slice(0, 3)
    .map(dim => {
      const score = dimScores[dim];
      const level = score >= 60 ? 'high' : score >= 35 ? 'mid' : 'low';
      return {
        title: dimLabels[dim],
        body:  dimDetails[dim][level]
      };
    });

  // Conditions (only for strong/conditional)
  const conditionMap = {
    strong: `Staging your capital rather than deploying it all at once; preserving a financial buffer that exists separately from the business; entering with a timeline assumption of 18+ months to meaningful profitability; and treating the first product cycle as tuition rather than a verdict.`,
    conditional: `Specifically: ${fin < 50 ? 'addressing your financial margin before deploying significant capital; ' : ''}${time < 50 ? 'securing a reliable time window and protecting it from displacement; ' : ''}${exp < 50 ? 'recalibrating your expectations around timeline and involvement; ' : ''}${dec < 50 ? 'defining clear exit conditions before starting. ' : ''}These are not suggestions — they are the conditions under which proceeding carries reasonable risk.`
  };

  return {
    executiveSummary: summaries[fitType] || summaries.conditional,
    frictions,
    conditions: conditionMap[fitType] || null
  };
}
