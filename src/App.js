import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SignUpModal from "./components/SignUpModal";
import ReviewModal from "./components/ReviewModal";
import FeaturedBooks from "./components/FeaturedBooks";
import CustomCarousel from "./components/CustomCarousel";

function App() {
  const [formData, setFormData] = useState({});
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setIsReviewModalOpen(true); // Show review modal after form submission
  };

  const handleFinalSubmit = () => {
    // Fetch request to send formData to the server
    console.log("Final Submission Data: ", formData);
    setIsReviewModalOpen(false); // Close the review modal after submission
  };

  return (
    <div>
      <Navbar />
      <CustomCarousel />
      <FeaturedBooks />
      <SignUpModal onSubmit={handleFormSubmit} />
      {isReviewModalOpen && (
        <ReviewModal formData={formData} onFinalSubmit={handleFinalSubmit} />
      )}
    </div>
  );
}

export default App;
