import React from "react";

// components
import Film from "./Film";

const FilmList = ({ films }) => {
  console.log(films);
  return (
    <section className="filmlist">
      {films.map((film) => {
        return (
          <Film
            key={film.episode_id}
            img="https://picsum.photos/70/90"
            title={film.title}
          ></Film>
        );
      })}
    </section>
  );
};

export default FilmList;
