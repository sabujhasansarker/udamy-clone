import React, { useState } from "react";

import data from "../../../cource.json";

const Courses = ({ container }) => {
  const [active, setActive] = useState(data.categories[0].split(" ").join("-"));
  const [courses, setCourses] = useState(
    data.courses.filter((d) => d.category.includes(active) && d)
  );

  const onClick = (e) => {
    setActive(e);
    setCourses(data.courses.filter((d) => d.category.includes(e) && d));
  };
  return (
    <section className={`courses ${container ? "container" : ""}`}>
      <h2 className="heading">The world's largest selection of courses</h2>
      <p className="heading-sub-text">
        Choose from 130,000 online video courses with new additions published
        every month
      </p>
      <div className="course">
        <ul>
          {data.categories.map((d, i) => (
            <li
              key={i}
              className={`${active === d.split(" ").join("-") && "active"}`}
              onClick={() => onClick(d)}
            >
              {d}
            </li>
          ))}
        </ul>
        <div className="courses-container">
          {courses.map((c, i) => (
            <div className="course" key={i}>
              <img src={c.image} alt="" />
              <div className="content">
                <h4>{c.title}</h4>
                <div className="review">
                  <p>{c.review.toFixed(1)}</p>
                  {Array.from({ length: c.review }, (_, i) => (
                    <img src="https://i.ibb.co/j59RP87/untitled-1.png" />
                  ))}
                </div>
                <div className="price">
                  <p>${((c.price * c.discount) / 100).toFixed(2)}</p>
                  <p className="discount">${c.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
