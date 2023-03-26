import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = (props) => {
  const url = "https://image.tmdb.org/t/p/original";
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    async function fetchbanner() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=d3aa0f793160ecd70dad043988aa34d0&language=en-US&page=1"
      );

      // const banner = await databanner.json();
      // setstate(banner);
      const data1 = await response.json();
      // console.log("THE DATA===", data1.results);
      setmovies(
        data1.results[Math.floor(Math.random() * data1.results.length - 1)]
      );
      // data1.results.map((i) => {
      //   console.log("The Single data==", i.backdrop_path);
      //   setmovies(i.backdrop_path);
      // });
      // setmovies(data1.results[0].backdrop_path);
      // setmovies(data1.results);
    }
    fetchbanner();
  }, []);
  console.log("THE Data in State==", movies);
  return (
    <>
      <div className="div">
        <img
          className="image"
          src={`${url}/${movies.backdrop_path}`}
          alt="hell"
        ></img>
        <div className="childdiv">
          <p className="childheading">{movies.title}</p>
          <p className="childheading2">{movies.overview}</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
