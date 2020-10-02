import React from "react";

const Banner = ({ container }) => {
  return (
    <section className={`banner ${container && "container"}`}>
      <div className="banner-content">
        <h1>Learn on your schedule</h1>
        <p className="text">
          Study any topic, anytime. Choose from thousands of expert-led courses
          now.
        </p>
        <form action="">
          <input type="text" placeholder="What do you want to learn?" />
        </form>
      </div>
    </section>
  );
};

export default Banner;
