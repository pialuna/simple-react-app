import React, { useState } from "react";
import { Link } from "react-router-dom";
// components
import HeartButton from "./HeartButton";

const CharacterListItem = ({ character }) => {
  const [liked, setLiked] = useState(false);

  const clickHandler = (name) => {
    setLiked(!liked);
    // to do: add id,name to favorites?
  };

  // get the character id from the api, that only provides an url
  const splittedUrlArray = character.url.split("/");
  const characterId = splittedUrlArray[splittedUrlArray.length - 2];

  return (
    <div className="bg-white rounded-md shadow-sm w-full p-4 mb-4 flex flex-col items-start justify-between">
      <div className="w-full flex flex-row items-center justify-between">
        <Link to={`/characters/${characterId}`}>
          <h3>{character.name}</h3>
        </Link>
        <HeartButton filled={liked} clickHandler={clickHandler}></HeartButton>
      </div>
    </div>
  );
};

export default CharacterListItem;
