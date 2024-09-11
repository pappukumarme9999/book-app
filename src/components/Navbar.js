import React, { useState } from "react";
import SignUpModal from "./SignUpModal";
import { Button } from "react-bootstrap";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-blue">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            BookNest
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="categoriesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="categoriesDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Non-Fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Science Fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fantasy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Biographies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Children's Books
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mystery & Thriller
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="authorsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Authors
                </a>
                <ul className="dropdown-menu" aria-labelledby="authorsDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      J.K. Rowling
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Stephen King
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      George R.R. Martin
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Agatha Christie
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      J.R.R. Tolkien
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Isaac Asimov
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Jane Austen
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="btn btn-outline-primary me-2"
                  href="#"
                  aria-current="page"
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <Button className="btn btn-primary" onClick={handleShow}>
                  Sign Up
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SignUpModal
        show={show}
        onHide={handleClose}
        onSubmit={(formData) => console.log(formData)}
      />
    </>
  );
}

export default Navbar;
