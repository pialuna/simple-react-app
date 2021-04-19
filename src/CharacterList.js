import React from "react";

// components
import Character from "./Character";

const CharacterList = ({ characters }) => {
  return (
    <section className="filmlist">
      {characters.map((character) => {
        console.log(character);
        return (
          <Character
            //key={character.name}
            key={character}
            img="https://picsum.photos/50"
            name={character}
            birthyear={character.birthyear}
          ></Character>
        );
      })}
    </section>
  );
};

export default CharacterList;
