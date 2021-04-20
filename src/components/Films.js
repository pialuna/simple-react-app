import React from "react";
// components
import FilmList from "./FilmList";

// The page with the complete list of films

const Films = ({ films }) => {
  return (
    <div>
      <h1>All Films</h1>
      <FilmList films={films} />
    </div>
  );
};

export default Films;
