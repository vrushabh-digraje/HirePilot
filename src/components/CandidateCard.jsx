export default function CandidateCard({ candidate, active, onSelect }) {
  const scoreClass = candidate.score >= 88 ? "text-bg-success" : candidate.score >= 78 ? "text-bg-warning" : "text-bg-secondary";

  return (
    <button
      type="button"
      className={`candidate-card text-start w-100 ${active ? "border-primary" : ""}`}
      onClick={onSelect}
    >
      <div className="d-flex align-items-center gap-2 mb-2">
        <img className="avatar" src={candidate.avatar} alt="" />
        <div className="min-w-0">
          <div className="fw-semibold text-truncate">{candidate.name}</div>
          <small className="text-secondary text-truncate d-block">{candidate.role}</small>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <small className="text-secondary">{candidate.time}</small>
        <span className={`badge ${scoreClass}`}>{candidate.score}</span>
      </div>
    </button>
  );
}
