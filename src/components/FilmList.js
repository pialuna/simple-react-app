import React from "react";

// components
import FilmListItem from "./FilmListItem";

const FilmList = ({ films }) => {
  return (
    <section className="w-full flex-col items-stretch justify-start">
      {films.map((film) => {
        return (
          <FilmListItem
            key={film.episode_id}
            img="https://picsum.photos/70/90"
            title={film.title}
            characters={film.characters}
          ></FilmListItem>
        );
      })}
    </section>
  );
};

export default FilmList;
