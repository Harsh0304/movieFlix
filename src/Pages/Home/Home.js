import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import NowPlaying from "./NowPlaying";
const Home = ({ apiPath }) => {
  return (
    <div className="home">
      <Hero />
      <NowPlaying apiPath={apiPath} />
    </div>
  );
};

export default Home;
