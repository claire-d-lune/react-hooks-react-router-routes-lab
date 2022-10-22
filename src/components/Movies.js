import React from "react";
import { movies } from "../data";

function Movies() {

  const movieDisplay = movies.map(movie => {
    const genreDisplay = movie.genres.map(genre => {
        return <li key={genre}>{genre}</li>
    })

    return (
    <div key={movie.title}>
      <h3>Name: {movie.title}</h3>
      <p>Time: {movie.time} </p>
      <p>Genre: </p>
      <ul>
        {genreDisplay}
      </ul>
    </div>)
  })


  return (
    <div>
      <h1>Movies Page</h1>
      {movieDisplay}
    </div>);
}

export default Movies;
