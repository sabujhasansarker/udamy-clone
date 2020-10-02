import React from "react";
import Banner from "./Banner";
import Courses from "./Courses";
import GetStart from "./GetStart";
import Categories from "./Categories";

const Home = () => {
  return (
    <div className="home">
      <Banner container={true} />
      <Courses container={true} />
      <GetStart container={false} />
      <Categories container={true} />
    </div>
  );
};

export default Home;
