import React, { useState } from "react";

const Film = ({ img, title }) => {
  const [liked, setLiked] = useState(false);

  const clickHandler = (title) => {
    setLiked(!liked);
    // to do: add id,title to favorites?
  };
  return (
    <div className="film">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <div>
        <button type="button" onClick={() => clickHandler(title)}>
          {liked ? "Dislike" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default Film;
