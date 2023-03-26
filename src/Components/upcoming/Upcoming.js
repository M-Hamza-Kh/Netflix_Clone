import React, { useEffect, useState } from "react";
import "./Upcoming.css";
const Upcoming = (props) => {
  const [state, setstate] = useState([]);
  const url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function datas() {
      const api = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=d3aa0f793160ecd70dad043988aa34d0&language=en-US&page=1"
      );
      const data = await api.json();

      const wholedata = data.results.map((arr) => {
        return (
          <div key={arr.id} className="myImage">
            <img
              className="upcomingdata1"
              src={`${url}/${arr.poster_path}`}
              alt="not shown"
            ></img>
          </div>
        );
      });
      setstate(wholedata);
    }
    datas();
  }, []);

  return (
    <div className="maindiv">
      <h2 className="heading">Upcoming Movies</h2>
      <div className="upcomingdata">{state}</div>
    </div>
  );
};

export default Upcoming;
