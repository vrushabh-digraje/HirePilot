import { RefreshCw } from "lucide-react";
import CandidateCard from "./CandidateCard.jsx";

export default function CandidatePipeline({ candidates, stages, selectedCandidate, onSelectCandidate, onNotify }) {
  return (
    <section className="panel" id="pipeline">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className="h5 mb-1">Candidate Pipeline</h2>
          <small className="text-secondary">{candidates.length} matching candidates</small>
        </div>
        <button className="btn btn-outline-secondary btn-icon" title="Refresh pipeline" onClick={() => onNotify("Pipeline refreshed")}>
          <RefreshCw />
        </button>
      </div>

      <div className="pipeline">
        {stages.map((stage) => (
          <div className="stage" key={stage}>
            <div className="d-flex align-items-center justify-content-between">
              <strong>{stage}</strong>
              <span className="badge rounded-pill text-bg-light">
                {candidates.filter((candidate) => candidate.stage === stage).length}
              </span>
            </div>
            {candidates
              .filter((candidate) => candidate.stage === stage)
              .map((candidate) => (
                <CandidateCard
                  key={candidate.id}
                  candidate={candidate}
                  active={selectedCandidate.id === candidate.id}
                  onSelect={() => onSelectCandidate(candidate)}
                />
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}
