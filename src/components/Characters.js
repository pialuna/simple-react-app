import React from "react";
// components
import CharacterList from "./CharacterList";

// The page with the complete list of characters

const Characters = ({ characters }) => {
  return (
    <div>
      <h1>All Characters</h1>
      <CharacterList characters={characters} />
    </div>
  );
};

export default Characters;
