import React from "react";
import { Link } from "react-router-dom";

const Business = ({ container }) => {
  return (
    <div className={`instructor business ${container ? "container" : ""}`}>
      <div className="instructor-bg business-bg"></div>
      <div className="instructor-container">
        <div className="business-left">
          <h2>Udemy for Business</h2>
          <p>
            Get unlimited access to 4,000+ of Udemy’s top <br /> courses for
            your team.
          </p>
          <Link to="/author" className="btn-bg">
            Get Udemy for Business
          </Link>
        </div>
        <img
          src="https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-ufb.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Business;
