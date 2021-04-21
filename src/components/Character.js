import React from "react";

// The character detail page

const Character = ({ character }) => {
  return (
    <div>
      <h1>name</h1>
      <p>Birth year: character.birth_year</p>
      <p>Director: character.height</p>
      <p>Producer: character.mass</p>
      <p>Producer: character.skin_color</p>
      <p>Producer: character.hair_color</p>
      {/* <FilmList films={character.films}/> */}
    </div>
  );
};

export default Character;
