import React, { useState } from "react";

const Character = ({ img, name, birthyear }) => {
  const [liked, setLiked] = useState(false);

  const clickHandler = (name) => {
    setLiked(!liked);
    // to do: add id,name to favorites?
  };
  return (
    <div className="film">
      <img src={img} alt={name} />
      <h1>{name}</h1>
      Birthyear: {birthyear}
      <div>
        <button type="button" onClick={() => clickHandler(name)}>
          {liked ? "Dislike" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default Character;
