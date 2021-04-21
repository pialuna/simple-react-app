import React from "react";

// components
import CharacterListItem from "./CharacterListItem";

const CharacterList = ({ characters }) => {
  return (
    <section className="w-full p-1 flex-col items-stretch justify-start">
      {characters.map((character) => {
        return (
          <CharacterListItem
            key={character.name}
            character={character}
          ></CharacterListItem>
        );
      })}
    </section>
  );
};

export default CharacterList;
