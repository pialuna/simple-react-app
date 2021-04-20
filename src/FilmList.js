import React from "react";

// components
import Film from "./Film";

const FilmList = ({ films }) => {
  return (
    <section className="p-1 flex-col items-stretch justify-start">
      {films.map((film) => {
        return (
          <Film
            key={film.episode_id}
            img="https://picsum.photos/70/90"
            title={film.title}
            characters={film.characters}
          ></Film>
        );
      })}
    </section>
  );
};

export default FilmList;
