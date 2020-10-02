import React from "react";
import { Link } from "react-router-dom";

const Companies = ({ container }) => {
  const companies = [
    {
      name: "booking.com",
      logo: "https://s.udemycdn.com/partner-logos/booking-logo.svg",
    },
    {
      name: "volkswagen",
      logo: "https://s.udemycdn.com/partner-logos/volkswagen-logo.svg",
    },
    {
      name: "mercedes",
      logo: "https://s.udemycdn.com/partner-logos/mercedes-logo-v2.svg",
    },
    {
      name: "adidas",
      logo: "https://s.udemycdn.com/partner-logos/adidas-logo.svg",
    },
    {
      name: "eventbrite",
      logo: "https://s.udemycdn.com/partner-logos/eventbrite-logo.svg",
    },
  ];
  return (
    <div className={`companies ${container ? "container" : ""} text-center`}>
      <h2>Trusted by companies of all sizes</h2>
      <div className="companies-container">
        {companies.map((companie, index) => (
          <Link key={index} to={`/${companie.name}`}>
            <img
              src={companie.logo}
              alt={companie.name}
              className={companie.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Companies;
