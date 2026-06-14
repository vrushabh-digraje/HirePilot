import { ClipboardCheck, Sparkles } from "lucide-react";

export default function HeroSection({ onGenerate, onNotify }) {
  return (
    <div className="workspace-hero" id="dashboard">
      <div className="hero-copy">
        <div>
          <span className="badge text-bg-primary mb-3">Live hiring workspace</span>
          <h2 className="display-6 fw-bold mb-3">Run structured AI-assisted interviews from one focused portal.</h2>
          <p className="text-secondary mb-0">
            Build question sets, compare candidate signals, and keep every interviewer aligned before the next call starts.
          </p>
        </div>
        <div className="d-flex flex-wrap gap-2 mt-4">
          <button className="btn btn-dark d-inline-flex align-items-center gap-2" onClick={onGenerate}>
            <Sparkles /> Generate questions
          </button>
          <button className="btn btn-outline-secondary d-inline-flex align-items-center gap-2" onClick={() => onNotify("Scorecard template opened")}>
            <ClipboardCheck /> Scorecard
          </button>
        </div>
      </div>
      <div className="hero-media">
        <img
          alt="Interview team reviewing candidate profiles"
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=80"
        />
      </div>
    </div>
  );
}
