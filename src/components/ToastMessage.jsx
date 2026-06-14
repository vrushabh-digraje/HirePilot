export default function ToastMessage() {
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToast" className="toast" role="status" aria-live="polite" aria-atomic="true">
        <div className="toast-header">
          <strong className="me-auto">HirePilot</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">Ready</div>
      </div>
    </div>
  );
}
