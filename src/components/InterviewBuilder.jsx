import { Copy, WandSparkles } from "lucide-react";

export default function InterviewBuilder({
  role,
  difficulty,
  focus,
  questions,
  roles,
  onRoleChange,
  onDifficultyChange,
  onFocusChange,
  onGenerate,
  onNotify,
}) {
  return (
    <section className="panel mt-3" id="builder">
      <div className="builder-grid">
        <div>
          <h2 className="h5 mb-3">AI Interview Builder</h2>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <select className="form-select" value={role} onChange={(event) => onRoleChange(event.target.value)}>
              {roles.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label d-flex justify-content-between">
              Difficulty <span className="text-secondary">{difficulty}/5</span>
            </label>
            <input
              className="form-range"
              type="range"
              min="1"
              max="5"
              value={difficulty}
              onChange={(event) => onDifficultyChange(Number(event.target.value))}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Interview focus</label>
            <input className="form-control" value={focus} onChange={(event) => onFocusChange(event.target.value)} />
          </div>
          <button className="btn btn-primary w-100 d-inline-flex align-items-center justify-content-center gap-2" onClick={onGenerate}>
            <WandSparkles /> Build interview
          </button>
        </div>

        <div>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h3 className="h6 mb-0">Generated Question Set</h3>
            <button className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-2" onClick={() => onNotify("Questions copied")}>
              <Copy /> Copy
            </button>
          </div>
          {questions.map((question, index) => (
            <div className="question-card" key={question}>
              <div className="d-flex gap-3">
                <span className="badge text-bg-dark align-self-start">{index + 1}</span>
                <p className="mb-0">{question}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
