import React, { useState } from "react";
import { Link } from "react-router-dom";
// components
import HeartButton from "./HeartButton";

const FilmListItem = ({ film }) => {
  const [liked, setLiked] = useState(false);

  const clickHandler = (title) => {
    setLiked(!liked);
    // to do: add id,title to favorites?
  };
  return (
    <div className="bg-white rounded-md shadow-sm w-full p-4 mb-4 flex flex-col items-start justify-between">
      <div className="w-full flex flex-row items-center justify-between">
        <Link to={`/films/${film.episode_id}`}>
          <h3>{film.title}</h3>
        </Link>
        <HeartButton filled={liked} clickHandler={clickHandler}></HeartButton>
      </div>
    </div>
  );
};

export default FilmListItem;
