export const questions = [
  { id:1, section:"Motivation",    text:"What most attracted you to Amazon FBA?",
    opts:["The income potential","The flexibility and lifestyle it appears to offer","I've seen others succeed and want to explore it","I enjoy analytical, operational work","I'm gathering information — not yet decided"], w:[0,2,3,4,5] },
  { id:2, section:"Timeline",      text:"If meaningful results took 12–18 months to materialise, how would that feel?",
    opts:["That is not what I expected","Very discouraging","Difficult, but manageable","That timeline seems realistic","Expected — I've done my research"], w:[0,0,3,4,5] },
  { id:3, section:"Capital",       text:"How would you describe your financial cushion for this venture?",
    opts:["None — I need this to work quickly","Very limited; mistakes would be painful","Some flexibility, but tight","Moderate; I can absorb learning costs","Comfortable; a loss would not threaten my stability"], w:[0,0,2,4,5] },
  { id:4, section:"Time",          text:"How many hours per week could you consistently allocate?",
    opts:["Fewer than 2 hours","2–5 hours","5–10 hours","10–20 hours","20 or more — this would be my primary focus"], w:[0,0,2,4,5] },
  { id:5, section:"Work style",    text:"Which describes your working preferences most accurately?",
    opts:["I strongly dislike detailed, repetitive analytical tasks","I prefer creative or people-focused work","I can tolerate analytical work when necessary","I'm comfortable with data and optimisation","I genuinely enjoy systematic problem-solving"], w:[0,1,3,4,5] },
  { id:6, section:"Resilience",    text:"When progress is slower than expected, how do you typically respond?",
    opts:["I usually abandon the effort","I become discouraged quickly","I grow anxious but push through","I stay patient and adjust my approach","I expect this — it rarely affects my commitment"], w:[0,0,3,4,5] },
  { id:7, section:"Platform risk", text:"How do you feel about building a business on a platform you do not control?",
    opts:["Very uncomfortable — I need control","I hadn't considered this","Somewhat uneasy, but I understand the tradeoff","Comfortable — that is part of the model","I actively plan for platform dependency risks"], w:[0,1,3,4,5] },
  { id:8, section:"Commitment",    text:"What would failure in this business mean to you personally?",
    opts:["Something I'd struggle to recover from emotionally","A serious financial setback","A frustrating but acceptable outcome","A learning experience with real costs","Part of the process — not identity-defining"], w:[0,0,2,4,5] },
  { id:9, section:"Intention",     text:"Which statement most accurately describes your position right now?",
    opts:["I want this to work quickly","I'm hopeful but uncertain what to expect","I'm exploring fit, not just outcomes","I want to understand the full reality before deciding","I'm open to discovering a better-suited direction"], w:[0,2,3,4,5] }
];

export function scoreAnswers(answers) {
  const raw = questions.reduce((sum, q) => sum + (answers[q.id] !== undefined ? q.w[answers[q.id]] : 0), 0);
  return Math.round((raw / (questions.length * 5)) * 100);
}
export function classifyScore(s) {
  if (s >= 72) return 'strong';
  if (s >= 45) return 'conditional';
  if (s >= 22) return 'risk';
  return 'redirect';
}

export const resultData = {
  strong: {
    accent:'#1a7a5e', tag:'Promising alignment',
    headline:'This could be a reasonable fit',
    lead:'Based on your responses, Amazon FBA appears broadly aligned with your current situation — if approached carefully and realistically.',
    meaning:'People with similar profiles tend to tolerate delayed feedback, understand inventory risk early, and sustain engagement through the learning curve. That does not make the process easy — but it makes it viable.',
    why:'Your answers suggest sufficient patience for longer timelines, acceptable tolerance for tied-up capital, and a realistic view of the workload involved.',
    frictions:[
      {t:'Expectation drift',b:"Even with good alignment, early phases can feel slower than anticipated. Watch for the urge to over-invest before validating a concept."},
      {t:'Platform dependency',b:"Dependence on Amazon's ecosystem is a structural risk. Developing awareness of this early will serve you better than discovering it under pressure."},
      {t:'Premature scaling',b:"Most meaningful losses in this business occur during expansion, not initial attempts. Patience at the growth stage matters as much as at entry."}
    ],
    guidance:'Proceed deliberately',
    next:"A deeper assessment can clarify whether this alignment holds under real-world constraints."
  },
  conditional: {
    accent:'#b07020', tag:'Conditional alignment',
    headline:'This could work — under specific conditions',
    lead:"Amazon FBA is not clearly wrong for you, but it carries meaningful risk unless certain constraints are acknowledged and managed before entry.",
    meaning:"People in this category most often succeed when they adjust expectations, stage their investment carefully, and resist going all-in before validation. Ignoring these conditions tends to produce frustration rather than traction.",
    why:"Your responses suggest tension between desired outcomes and available time, or between risk tolerance and capital exposure requirements.",
    frictions:[
      {t:'Capital timing',b:"The impulse to deploy capital quickly before validating assumptions is a common and costly mistake for profiles like yours."},
      {t:'Timeline expectations',b:"Your responses suggest your expected timeline may be shorter than what this model typically rewards."},
      {t:'Execution bandwidth',b:"Your current life structure may leave less margin for sustained operational attention than this business quietly requires."}
    ],
    guidance:'Proceed with specific conditions addressed first',
    next:"A deeper assessment can identify exactly which conditions are negotiable — and which are not."
  },
  risk: {
    accent:'#a83030', tag:'High-risk fit',
    headline:'This business would likely be high stress for you right now',
    lead:"Based on your responses, Amazon FBA would likely introduce more pressure than progress under your current circumstances.",
    meaning:"When people with similar profiles pursue this model, they commonly experience financial stress earlier than expected, anxiety around delayed returns, and pressure to continue investing despite unclear signals.",
    why:"Your answers point to limited margin for financial error, discomfort with delayed feedback, or time constraints that conflict structurally with the model.",
    frictions:[
      {t:'Financial strain',b:"The capital exposure required before any meaningful return may create stress that degrades decision quality at exactly the moment it is most needed."},
      {t:'Feedback loop mismatch',b:"This business provides slow, indirect feedback. Your profile suggests that will be difficult to sustain without visible progress markers."},
      {t:'Identity risk',b:"When a business feels personal, losses become harder to process rationally. That dynamic tends to produce costly overcommitment."}
    ],
    guidance:'Pause and reassess conditions before proceeding',
    next:"Two paths are available: understand the specific risks more clearly, or explore better-suited business types."
  },
  redirect: {
    accent:'#2460a0', tag:'Explore other directions',
    headline:'This is probably not the right model — but that is useful information',
    lead:"Your responses suggest that Amazon FBA conflicts meaningfully with how you work, tolerate risk, or manage uncertainty.",
    meaning:"Many people arrive at this conclusion only after spending money. You reached it in five minutes. This result does not close doors — it narrows them toward options that better match your actual situation.",
    why:"Your profile suggests you may build a more durable business in a model that provides faster feedback, requires less upfront capital, or aligns more closely with your working style.",
    frictions:[
      {t:'Structural conflict',b:"The nature of inventory-based business fundamentally conflicts with your expressed constraints and preferences."},
      {t:'Capital exposure',b:"The level of capital at risk before any validation is likely incompatible with your current position."},
      {t:'Time horizon mismatch',b:"The feedback timelines inherent in this model are not aligned with your situation or temperament."}
    ],
    guidance:'Explore better-suited business models',
    next:"The Redirection Explorer can help you identify business archetypes that better match your temperament and constraints."
  }
};

export const archetypes = [
  {n:'I',   title:'Skill-leveraged services',      body:'Low capital, fast feedback, direct income-to-competence correlation. Rewards expertise without platform dependency.'},
  {n:'II',  title:'Asset-light digital models',    body:'Minimal inventory, patient audience or platform building. Requires consistency over time rather than capital upfront.'},
  {n:'III', title:'Relationship-driven businesses',body:'Trust-based, slow to build, high reputation leverage. The work compounds through reliability, not speed.'},
  {n:'IV',  title:'Asymmetric experiments',        body:'Small, bounded bets with limited downside. Suited to testing direction before committing meaningful capital.'},
  {n:'V',   title:'Systems and operations',        body:'Process-heavy, high delegation potential. Rewards structure and a tolerance for operational complexity.'}
];
