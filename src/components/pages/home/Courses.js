import React from "react";

const Courses = ({ container }) => {
  return (
    <section className={`courses ${container ? "container" : ""}`}>
      <h2 className="heading">The world's largest selection of courses</h2>
      <p className="heading-sub-text">
        Choose from 130,000 online video courses with new additions published
        every month
      </p>
      <div className="course">
        <ul>
          <li className="active">Python</li>
          <li>Excel</li>
          <li>Web development</li>
          <li>Javascript</li>
          <li>Data science</li>
          <li>AWS Certificate</li>
        </ul>
      </div>
    </section>
  );
};

export default Courses;
