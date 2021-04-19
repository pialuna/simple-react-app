import React, { useState } from "react";

import CharacterList from "./CharacterList";

const Film = ({ img, title, characters }) => {
  const [liked, setLiked] = useState(false);

  const clickHandler = (title) => {
    setLiked(!liked);
    // to do: add id,title to favorites?
  };
  return (
    <div className="film">
      <img src={img} alt={title} />
      <div>
        <h1>{title}</h1>
        <CharacterList characters={characters}></CharacterList>
      </div>

      <div>
        <button type="button" onClick={() => clickHandler(title)}>
          {liked ? "Dislike" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default Film;
