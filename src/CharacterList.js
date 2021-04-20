import React from "react";

// components
import Character from "./Character";

const CharacterList = ({ characters }) => {
  return (
    <section className="p-1 flex-col items-stretch justify-start">
      {characters.map((character) => {
        return (
          <Character
            // character is currently an URL
            //key={character.name}
            key={character}
            name={character}
            birthyear={character.birthyear}
          ></Character>
        );
      })}
    </section>
  );
};

export default CharacterList;
