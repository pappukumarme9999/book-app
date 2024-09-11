import React from "react";

function ReviewModal({ formData, finalSubmit }) {
  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Review Your Details</h5>
            <button
              className="btn-close"
              onClick={() =>
                window.bootstrap.Modal.getInstance(
                  document.querySelector("#reviewModal")
                ).hide()
              }
            ></button>
          </div>
          <div className="modal-body">
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={finalSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
