import React, { useState } from "react";

import HeartButton from "./HeartButton";

const FilmListItem = ({ title, characters }) => {
  const [liked, setLiked] = useState(false);

  const clickHandler = (title) => {
    setLiked(!liked);
    // to do: add id,title to favorites?
  };
  return (
    <div className="bg-white rounded-md shadow-sm w-full p-4 mb-4 flex flex-col items-start justify-between">
      <div className="w-full flex flex-row items-center justify-between">
        <h3>{title}</h3>
        <HeartButton filled={liked} clickHandler={clickHandler}></HeartButton>
      </div>{" "}
    </div>
  );
};

export default FilmListItem;
