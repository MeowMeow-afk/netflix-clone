import React, { useState, useEffect } from "react";
import "./slide.css";
import endPoints from "../request";
import axios from "../axios";

const imgurl = "https://image.tmdb.org/t/p/original";
function Slide() {
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(endPoints.fetchNetflixOrignal);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncateString(str, num) {
    return str?.length > num ? str.substr(0, num) + " ..." : str;
  }
  
  return (
    <div
      className="slides"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                ${imgurl}${movie.backdrop_path}
            )`,
        backgroundPosition: "center",
      }}
    >
      <div className="inner_slides">
        <h1>{movie.name}</h1>
        <h3>{truncateString(movie.overview, 180)}</h3>
        <div className="buttons">
          <button className="btn">Play</button>
          <button className="btn">More info</button>
        </div>
      </div>
        <div
          className='slide--faceBottom'
          style={{
            marginTop:'0.4rem',
            height: "9.27rem",
            background: "linear-gradient(180deg, rgba(37,37,37,0.01), #111 50%)",
          }}
        />
    </div>
  );
}

export default Slide;
