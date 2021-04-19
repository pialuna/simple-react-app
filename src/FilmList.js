import React from "react";

// components
import Film from "./Film";
// data
import films from "./dummyData/films";

const FilmList = () => {
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
