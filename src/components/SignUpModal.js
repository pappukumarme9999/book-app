import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function SignUpModal({ show, onHide, onSubmit }) {
  const [formState, setFormState] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    addressType: "Permanent",
    dob: "",
    occupation: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleRadioChange = (e) => {
    setFormState({ ...formState, addressType: e.target.value });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    onHide();
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="signup-form" onSubmit={handleSignUpSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                placeholder="Enter your mobile number"
                value={formState.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea
                className="form-control"
                id="address"
                rows="3"
                placeholder="Enter your address"
                value={formState.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Address Type</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="addressType"
                  id="perma"
                  value="Permanent"
                  checked={formState.addressType === "Permanent"}
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="perma">
                  Permanent
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="addressType"
                  id="comm"
                  value="Communication"
                  checked={formState.addressType === "Communication"}
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="comm">
                  Communication
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                value={formState.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="occupation" className="form-label">
                Occupation
              </label>
              <input
                type="text"
                className="form-control"
                id="occupation"
                placeholder="Enter your occupation"
                value={formState.occupation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Create Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Create a password"
                value={formState.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={formState.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <Button variant="primary" type="submit" className="mt-3">
              Sign Up
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignUpModal;
