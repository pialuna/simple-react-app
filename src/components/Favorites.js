import React from "react";
// components
import FilmList from "./FilmList";
import CharacterList from "./CharacterList";

// The favorites page

const Favorites = ({ films, characters }) => {
  return (
    <section>
      <h1>Favorites</h1>
      <h2>My favorite Films</h2>
      <FilmList films={films} />
      <h2>My favorite Characters</h2>
      <CharacterList characters={characters} />
    </section>
  );
};

export default Favorites;
