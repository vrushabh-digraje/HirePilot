import { Bot, CalendarClock, Kanban, LayoutDashboard } from "lucide-react";
import { useEffect } from "react";
import $ from "jquery";

export default function Sidebar({ onNotify }) {
  useEffect(() => {
    const selector = ".sidebar .nav-link";
    const handleClick = function () {
      $(selector).removeClass("active");
      $(this).addClass("active");
    };

    $(document).on("click", selector, handleClick);
    return () => $(document).off("click", selector, handleClick);
  }, []);

  return (
    <aside className="sidebar">
      <div className="d-flex align-items-center gap-3">
        <div className="brand-mark">HP</div>
        <div>
          <div className="fw-bold">HirePilot</div>
          <small className="text-white-50">AI Interview Portal</small>
        </div>
      </div>

      <nav className="nav flex-column gap-1">
        <a className="nav-link active" href="#dashboard"><LayoutDashboard /> Dashboard</a>
        <a className="nav-link" href="#pipeline"><Kanban /> Pipeline</a>
        <a className="nav-link" href="#builder"><Bot /> AI Builder</a>
        <a className="nav-link" href="#schedule"><CalendarClock /> Schedule</a>
      </nav>

      <div className="sidebar-card mt-auto">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <span className="fw-semibold">Hiring Health</span>
          <span className="badge text-bg-success">Good</span>
        </div>
        <small className="text-white-50 d-block mb-3">Average candidate response time is down 18% this week.</small>
        <button className="btn btn-sm btn-light w-100" onClick={() => onNotify("Report exported")}>
          Export report
        </button>
      </div>
    </aside>
  );
}
