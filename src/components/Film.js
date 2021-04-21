import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// components
import CharacterList from "./CharacterList";

// The film detail page

const Film = () => {
  // this film
  const [film, setFilm] = useState({});
  // all characters
  const [characters, setCharacters] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    // fetch this film
    async function fetchFilm() {
      const response = await fetch(`https://swapi.dev/api/films/${id}`);
      const data = await response.json();
      setFilm(data);
    }
    // fetch all characters for finding intersections
    async function fetchCharacters() {
      const response = await fetch("https://swapi.dev/api/people/");
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchFilm();
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>{film.title}</h1>
      <p className="mb-4">{film.opening_crawl}</p>
      <p>Release Date: {film.release_date}</p>
      <p>Director: {film.director}</p>
      <p>Producer: {film.producer}</p>

      <h2>Characters in {film.title}</h2>
      <CharacterList
        characters={characters.filter((character) =>
          character.films.includes(`http://swapi.dev/api/films/${id}/`)
        )}
      />
    </div>
  );
};

export default Film;
