import { Plus, Search } from "lucide-react";

export default function Topbar({ search, onSearch }) {
  return (
    <header className="topbar">
      <div>
        <h1 className="h4 mb-1">Interview Command Center</h1>
        <small className="text-secondary">Track candidates, generate interviews, and schedule panels.</small>
      </div>

      <div className="d-flex align-items-center gap-2">
        <div className="search-wrap">
          <Search />
          <input
            className="form-control"
            placeholder="Search candidates, stages, skills"
            value={search}
            onChange={(event) => onSearch(event.target.value)}
          />
        </div>
        <button
          className="btn btn-primary d-inline-flex align-items-center gap-2"
          data-bs-toggle="modal"
          data-bs-target="#scheduleModal"
        >
          <Plus /> Schedule
        </button>
      </div>
    </header>
  );
}
