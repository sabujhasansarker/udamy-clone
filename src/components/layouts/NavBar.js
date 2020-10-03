import React from "react";
import { Link } from "react-router-dom";

import navbarLink from "./Nav.json";

const NavBar = () => {
  const menu = (nav) => {
    return (
      nav.subMenu && (
        <ul>
          {nav.subMenu.map((sub1, i) => (
            <li key={i}>
              <Link to={`/${sub1.name.split(" ").join("-")}`}>{sub1.name}</Link>
              {sub1.subMenu && menu(sub1)}
            </li>
          ))}
        </ul>
      )
    );
  };

  const category = () => {
    return navbarLink.map((nav, i) => (
      <ul key={i}>
        <li>{nav.name}</li>
        {menu(nav)}
      </ul>
    ));
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
            alt="logo"
          />
        </div>
        <ul className="categories-menu">
          <li>
            Categories
            {category()}
          </li>
        </ul>
        <form className="form">
          <div className="form-group">
            <label htmlFor="search">
              <i className="fa fa-search"></i>
              <input
                type="text"
                placeholder="Search for anything "
                id="search"
              />
            </label>
          </div>
        </form>
        <Link to="/business" className="business-menu">
          Udemy for Business
        </Link>
        <Link to="/teach" className="teach">
          Teach on Udemy
        </Link>
        <Link to="/cart" className="cart">
          <i className="fa fa-shopping-cart"></i>
        </Link>
        <Link to="/login" className="btn login">
          Login
        </Link>
        <Link to="/signup" className="btn-bg signup">
          sign up
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
