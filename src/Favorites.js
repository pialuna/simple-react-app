import React from "react";
import FilmList from "./FilmList";

const Favorites = ({ films }) => {
  return (
    <section>
      <h2>Films</h2>
      <FilmList films={films} />
      <h2>Characters</h2>
      <div>Character List</div>
    </section>
  );
};

export default Favorites;
