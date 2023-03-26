import React, { useEffect, useState } from "react";

const Popular = (props) => {
  const [state, setstate] = useState([]);
  const url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function toprateddatas() {
      const popularapi = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=d3aa0f793160ecd70dad043988aa34d0&language=en-US&page=1"
      );
      const populardata = await popularapi.json();

      const popularwholedata = populardata.results.map((arr) => {
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
      setstate(popularwholedata);
    }
    toprateddatas();
  }, []);

  return (
    <div className="maindiv">
      <h2 className="heading">Popular</h2>
      <div className="upcomingdata">{state}</div>
    </div>
  );
};

export default Popular;
