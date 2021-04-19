import React from "react";

// components
import Film from "./Film";

const FilmList = ({ films }) => {
  return (
    <section className="filmlist">
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
