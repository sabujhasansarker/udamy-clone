import React from "react";
import { Link } from "react-router-dom";

const GetStart = ({ container }) => {
  return (
    <section className={`getStart ${container ? "container" : ""}`}>
      <h2>Get personal learning recommendations</h2>
      <p className="text">Answer a few questions for your top picks</p>
      <Link to="/" className="btn">
        Get Start
      </Link>
    </section>
  );
};

export default GetStart;
