import React, { useState, useEffect } from "react";
import axios from "../axios";
import './row.css';


const imgurl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, islarge }) {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  
  function displayPoster(movie) {
    return (
      <img
        key={movie.id}
        className={`inner_row_image ${islarge ? `inner_row_image_large` : null}`}
        src={`${imgurl}${islarge ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.name}
      />
    );
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="inner_row">{movies.map(displayPoster)}</div>
    </div>
  );
}

export default Row;
