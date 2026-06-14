export const candidates = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Frontend Engineer",
    stage: "Screening",
    score: 86,
    skills: ["React", "Testing", "UX"],
    time: "Today, 3:00 PM",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 2,
    name: "Priya Raman",
    role: "AI Product Manager",
    stage: "Technical",
    score: 91,
    skills: ["Roadmaps", "LLMs", "Metrics"],
    time: "Tomorrow, 11:30 AM",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 3,
    name: "Neil Shah",
    role: "Backend Engineer",
    stage: "Panel",
    score: 78,
    skills: ["Node", "APIs", "SQL"],
    time: "Tue, 10:00 AM",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 4,
    name: "Maya Iyer",
    role: "Data Scientist",
    stage: "Offer",
    score: 94,
    skills: ["Python", "NLP", "Modeling"],
    time: "Fri, 1:00 PM",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 5,
    name: "Kabir Sethi",
    role: "DevOps Engineer",
    stage: "Technical",
    score: 82,
    skills: ["AWS", "CI/CD", "Docker"],
    time: "Wed, 4:30 PM",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 6,
    name: "Sara Khan",
    role: "UX Researcher",
    stage: "Screening",
    score: 73,
    skills: ["Research", "Workshops", "Figma"],
    time: "Mon, 9:30 AM",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
  },
];

export const questionBank = {
  "Frontend Engineer": [
    "Walk through how you would structure a reusable React component library.",
    "How do you find and fix a slow interaction in a production React app?",
    "Describe a testing strategy for a complex form with async validation.",
  ],
  "Backend Engineer": [
    "Design an API rate limiter that works across multiple server instances.",
    "How would you migrate a large table without customer downtime?",
    "Explain your approach to observability for a new microservice.",
  ],
  "AI Product Manager": [
    "How would you define success metrics for an AI assistant feature?",
    "What guardrails would you require before launching generated recommendations?",
    "Describe how you prioritize model quality work against product velocity.",
  ],
  "Data Scientist": [
    "How do you diagnose data drift after a model is deployed?",
    "Explain how you would evaluate a retrieval-augmented generation system.",
    "What tradeoffs matter when choosing between precision and recall?",
  ],
};

export const stages = ["Screening", "Technical", "Panel", "Offer"];
