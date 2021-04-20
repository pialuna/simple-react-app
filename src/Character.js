import React, { useState } from "react";

// components
import HeartButton from "./HeartButton";

const Character = ({ img, name, birthyear }) => {
  const [liked, setLiked] = useState(false);

  const clickHandler = (name) => {
    setLiked(!liked);
    // to do: add id,name to favorites?
  };
  return (
    <div className="bg-gray-200 w-full p-4 mb-4 flex flex-col items-start justify-between">
      <div className="w-full flex flex-row items-center justify-between">
        <h2>{name}</h2>
        <HeartButton filled={liked} clickHandler={clickHandler}></HeartButton>
      </div>
      <article>
        Birthyear: {birthyear}
        Height: xxx
      </article>
    </div>
  );
};

export default Character;
