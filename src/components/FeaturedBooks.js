import React from "react";
import cardImage1 from '../images/card/card1.jpeg';
import cardImage2 from '../images/card/card2.jpeg';
import cardImage3 from '../images/card/card3.jpeg';


function FeaturedBooks() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Featured Books</h2>
      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="card">
            <img
              src="https://picsum.photos/304/405"
              className="card-img-top"
              alt="Book Title"
            />
            <div className="card-body">
              <h5 className="card-title">Book Title</h5>
              <p className="card-text">Author: Book Author</p>
              <a href="#" className="btn btn-primary">
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img
              src={cardImage1}
              className="card-img-top"
              alt="Book Title"
            />
            <div className="card-body">
              <h5 className="card-title">Book Title</h5>
              <p className="card-text">Author: Book Author</p>
              <a href="#" className="btn btn-primary">
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img
              src={cardImage2}
              className="card-img-top"
              alt="Book Title"
            />
            <div className="card-body">
              <h5 className="card-title">Book Title</h5>
              <p className="card-text">Author: Book Author</p>
              <a href="#" className="btn btn-primary">
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img
              src={cardImage3}
              className="card-img-top"
              alt="Book Title"
            />
            <div className="card-body">
              <h5 className="card-title">Book Title</h5>
              <p className="card-text">Author: Book Author</p>
              <a href="#" className="btn btn-primary">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedBooks;
