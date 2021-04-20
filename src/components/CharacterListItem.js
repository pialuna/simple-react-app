import React, { useState } from "react";

// components
import HeartButton from "./HeartButton";

const CharacterListItem = ({ name, birthyear }) => {
  const [liked, setLiked] = useState(false);

  const clickHandler = (name) => {
    setLiked(!liked);
    // to do: add id,name to favorites?
  };
  return (
    <div className="bg-gray-100 rounded-md shadow-sm w-full p-4 mb-4 flex flex-col items-start justify-between">
      <div className="w-full flex flex-row items-center justify-between">
        <h3>{name}</h3>
        <HeartButton filled={liked} clickHandler={clickHandler}></HeartButton>
      </div>
      <article>
        <p>Birthyear: {birthyear}</p>
        <p>Height: xxx</p>
      </article>
    </div>
  );
};

export default CharacterListItem;
