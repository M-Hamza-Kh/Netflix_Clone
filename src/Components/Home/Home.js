import React from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Nowplaying from "../Nowplaying/Nowplaying";
import Upcoming from "../upcoming/Upcoming";
import Toprated from "../Top_rated/Top_rated";
import Popular from "../Popular/Popular";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Upcoming></Upcoming>
      <Nowplaying></Nowplaying>
      <Toprated></Toprated>
      <Popular></Popular>
    </div>
  );
};

export default Home;
