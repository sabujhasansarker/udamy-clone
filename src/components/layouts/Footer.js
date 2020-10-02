import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footer = [
    {
      menu: [
        { name: "Udemy for Business" },
        { name: "Teach on Udemy" },
        { name: "Get the app" },
        { name: "About us" },
        { name: "Contact us" },
      ],
    },
    {
      menu: [
        { name: "Careers" },
        { name: "Blog" },
        { name: "Help and support" },
        { name: "affiliate" },
      ],
    },
    {
      menu: [
        { name: "Careers" },
        { name: "Blog" },
        { name: "Help and support" },
        { name: "affiliate" },
      ],
    },
  ];
  return (
    <footer>
      <div className="header">
        <div className="menu">
          {footer.map((f, i) => (
            <Fragment key={i}>
              {f.menu && (
                <ul>
                  {f.menu.map((fo, i) => (
                    <li key={i}>
                      <Link
                        to={`/${fo.name.split(" ").join("-").toLowerCase()}`}
                      >
                        {fo.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </Fragment>
          ))}
        </div>
        {/* <h1>Menu</h1> */}
      </div>
      <div className="footer">
        <div className="logo">
          <Link to="/">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
              alt="logo"
            />
          </Link>
        </div>
        <p>© 2020 Udemy, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
