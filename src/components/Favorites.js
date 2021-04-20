import React from "react";
import FilmList from "./FilmList";

const Favorites = ({ films }) => {
  return (
    <section>
      <h1>Favorites</h1>
      <h2>My favorite Films</h2>
      <FilmList films={films} />
      <h2>My favorite Characters</h2>
      <div>Character List</div>
    </section>
  );
};

export default Favorites;
