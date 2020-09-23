import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  let navbarLink = [
    {
      name: "development",
      subMenu: [
        { name: "all development" },
        {
          name: "web development",
          subMenu: [
            { name: "javaScript" },
            { name: "react js" },
            { name: "angular js" },
            { name: "css" },
            { name: "node js" },
            { name: "wordPress" },
            { name: "PHP" },
            { name: "python" },
            { name: "django" },
          ],
        },
        {
          name: "data science",
          subMenu: [
            { name: "machine learning" },
            { name: "data analysis" },
            { name: "r" },
            { name: "python" },
            { name: "deep learning" },
          ],
        },
      ],
    },
    {
      name: "Business",
      subMenu: [
        { name: "all business" },
        {
          name: "finance",
          subMenu: [
            { name: "finance analysis" },
            { name: "investing" },
            { name: "forex" },
          ],
        },
      ],
    },
  ];

  const menu = (nav) => {
    return (
      nav.subMenu &&
      nav.subMenu.map((sub1, i) => (
        <ul key={i}>
          <li>
            <Link to={`/${sub1.name.split(" ").join("-")}`}>{sub1.name}</Link>
            {sub1.subMenu && menu(sub1)}
          </li>
        </ul>
      ))
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
    <header className="navbar">
      <nav>
        <div className="logo">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
            alt="logo"
          />
        </div>
        <ul className="categories">
          <li>
            Categories
            {/* <ul>
              <li>
                <Link to="/development">Development</Link>
                <ul>
                  <li>
                    <Link to="/development">All Development</Link>
                  </li>
                  <li>
                    <Link to="/web-development">Web Development</Link>
                    <ul>
                      <li>
                        <Link to="/web-development">All Web Development</Link>
                      </li>
                      <li>
                        <Link to="/reactJs">React Js</Link>
                      </li>
                      <li>
                        <Link to="/nodeJs">Node Js</Link>
                      </li>
                      <li>
                        <Link to="/wordPress">WordPress</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul> */}
            {category()}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
