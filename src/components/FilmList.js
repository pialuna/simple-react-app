import React from "react";

// components
import FilmListItem from "./FilmListItem";

const FilmList = ({ films }) => {
  return (
    <section className="w-full p-1 flex-col items-stretch justify-start">
      {films.map((film) => {
        return <FilmListItem key={film.episode_id} film={film}></FilmListItem>;
      })}
    </section>
  );
};

export default FilmList;
