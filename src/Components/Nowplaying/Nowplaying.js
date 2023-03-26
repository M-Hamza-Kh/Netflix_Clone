import React, { useEffect, useState } from "react";

const Nowplaying = () => {
  const [state, setstate] = useState([]);
  const url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchnowplaying() {
      const datanowplaying = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=d3aa0f793160ecd70dad043988aa34d0&language=en-US&page=1"
      );
      const datanowplayingjson = await datanowplaying.json();

      const nowplayingwholedata = datanowplayingjson.results.map((arr) => {
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
      setstate(nowplayingwholedata);
    }
    fetchnowplaying();
  }, []);
  return (
    <div className="maindiv">
      <h3 className="heading">Now Playing</h3>
      <div className="upcomingdata">{state}</div>
    </div>
  );
};

export default Nowplaying;
