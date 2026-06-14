import { Modal } from "bootstrap";

export default function ScheduleModal({ candidate, onNotify }) {
  function scheduleInterview() {
    const form = document.querySelector("#scheduleForm");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const modal = Modal.getInstance(document.querySelector("#scheduleModal"));
    modal.hide();
    onNotify("Interview scheduled");
  }

  return (
    <div className="modal fade" id="scheduleModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title h5">Schedule Interview</h2>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form id="scheduleForm">
              <div className="mb-3">
                <label className="form-label">Candidate</label>
                <input className="form-control" value={candidate.name} readOnly required />
              </div>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="form-label">Date</label>
                  <input className="form-control" type="date" required />
                </div>
                <div className="col-sm-6">
                  <label className="form-label">Time</label>
                  <input className="form-control" type="time" required />
                </div>
              </div>
              <div className="mt-3">
                <label className="form-label">Interview type</label>
                <select className="form-select" defaultValue="Technical">
                  <option>Screening</option>
                  <option>Technical</option>
                  <option>Panel</option>
                  <option>Final</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
            <button className="btn btn-primary" onClick={scheduleInterview}>Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
}
