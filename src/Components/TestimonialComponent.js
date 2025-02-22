import React from "react";
import "./Testimonial.css"; // Import the CSS file

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h4 style={{ fontWeight: "bold", textAlign: "center" }} className="title">
        What Our Clients Say
      </h4>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "The efficiency and reliability of their petrochemical solutions
                have significantly improved our operations."
              </p>
              <p className="testimonial-author">- John Miller</p>
              <p className="testimonial-stars">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>

        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "Exceptional service and top-notch quality in petrochemical
                processing. Highly recommended!"
              </p>
              <p className="testimonial-author">- Sarah Thompson</p>
              <p className="testimonial-stars">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>

        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "Their expertise in petrochemicals has streamlined our supply
                chain, making operations more cost-effective."
              </p>
              <p className="testimonial-author">- Mark Robinson</p>
              <p className="testimonial-stars">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;