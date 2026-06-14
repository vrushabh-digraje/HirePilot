import { Code2, MessagesSquare, PhoneCall } from "lucide-react";

export default function CandidateSignal({ candidate }) {
  return (
    <aside className="panel">
      <h2 className="h5 mb-3">Candidate Signal</h2>
      <div className="d-flex align-items-center gap-3 mb-3">
        <img className="avatar" src={candidate.avatar} alt="" />
        <div className="min-w-0">
          <div className="fw-bold">{candidate.name}</div>
          <small className="text-secondary">{candidate.role}</small>
        </div>
        <div className="score-ring ms-auto" style={{ "--score": candidate.score }}>
          <span>{candidate.score}</span>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-2 mb-3">
        {candidate.skills.map((skill) => (
          <span className="badge badge-soft text-primary" key={skill}>{skill}</span>
        ))}
      </div>
      <div className="timeline">
        <Timeline icon={PhoneCall} title="Recruiter screen" text="Strong communication and clear motivation." />
        <Timeline icon={Code2} title="Technical round" text="Needs one deeper system design probe." />
        <Timeline icon={MessagesSquare} title="Panel note" text="Add collaboration and conflict examples." />
      </div>
    </aside>
  );
}

function Timeline({ icon: Icon, title, text }) {
  return (
    <div className="timeline-item">
      <div className="timeline-icon"><Icon /></div>
      <div>
        <div className="fw-semibold">{title}</div>
        <small className="text-secondary">{text}</small>
      </div>
    </div>
  );
}
