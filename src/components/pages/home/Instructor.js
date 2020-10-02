import React from "react";
import { Link } from "react-router-dom";

const Instructor = ({ container }) => {
  return (
    <div className={`instructor ${container && "container"}`}>
      <div className="instructor-bg"></div>
      <div className="instructor-container">
        <img
          src="https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-teacher.jpg"
          alt=""
        />
        <div className="instructor-right">
          <h2>Become an instructor</h2>
          <p>
            Top instructors from around the world teach <br /> millions of
            students on Udemy. We provide the <br /> tools and skills to teach
            what you love.
          </p>
          <Link to="/author" className="btn-bg">
            Start teaching today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
