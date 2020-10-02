import React from "react";
import Banner from "./Banner";
import Courses from "./Courses";
import GetStart from "./GetStart";

const Home = () => {
  return (
    <div className="home">
      <Banner container={true} />
      <Courses container={true} />
      <GetStart container={false} />
    </div>
  );
};

export default Home;
