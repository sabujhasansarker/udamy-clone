import React from "react";

import categories from "../../layouts/Nav.json";
import { Link } from "react-router-dom";

const Category = ({ container }) => {
  return (
    <section className={`categories ${container ? "container" : ""}`}>
      <h2 className="text-left">Top Categories</h2>
      <div className="categories-container">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.name.split(" ").join("-").toLowerCase()}
            className="category"
          >
            <img src={category.img} alt={category.name} />
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;
