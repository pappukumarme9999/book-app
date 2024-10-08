import React from "react";
import { Modal, Button } from "react-bootstrap";


function ReviewModal({ show, formData, onHide, finalSubmit }) {
  const { showReviewModal, setShowReviewModal } = onHide;
  return (
    <Modal show={showReviewModal || show}>
      <Modal.Header closeButton>
        <Modal.Title>Review Your Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Mobile:</strong> {formData.mobile}
        </p>
        {/* Add more fields to display here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={finalSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReviewModal;
