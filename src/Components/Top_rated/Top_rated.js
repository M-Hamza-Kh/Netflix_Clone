import React, { useEffect, useState } from "react";

const Toprated = (props) => {
  const [state, setstate] = useState([]);
  const url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function toprateddatas() {
      const topratedapi = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=d3aa0f793160ecd70dad043988aa34d0&language=en-US&page=1"
      );
      const toprateddata = await topratedapi.json();
     

      const topratedwholedata = toprateddata.results.map((arr) => {
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
      setstate(topratedwholedata);
    }
    toprateddatas();
  }, []);

  return (
    <div className="maindiv">
      <h2 className="heading">Top Rated</h2>
      <div className="upcomingdata">{state}</div>
    </div>
  );
};

export default Toprated;
