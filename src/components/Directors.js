import React from "react";
import { directors } from "../data";

function Directors() {

  const directorCards = directors.map((director) => {
    const movieList = director.movies.map((movie) =>{
      return <li key={movie}>{movie}</li>
    })
    
    return (
      <div key={director.name}>
        <p>{director.name}</p>
        <ul>
          {movieList}
        </ul>
      </div>);
    })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorCards}
    </div>);
}

export default Directors;
