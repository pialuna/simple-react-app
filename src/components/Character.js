import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// components
import FilmList from "./FilmList";

// The character detail page

const Character = () => {
  // this film
  const [character, setCharacter] = useState({});
  // all characters
  const [films, setFilms] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    // fetch this character
    async function fetchCharacter() {
      const response = await fetch(`https://swapi.dev/api/people/${id}`);
      const data = await response.json();
      setCharacter(data);
    }
    // fetch all films for finding intersections
    async function fetchFilms() {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      setFilms(data.results);
    }
    fetchCharacter();
    fetchFilms();
  }, []);

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Birth year: {character.birth_year}</p>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Skin Color: {character.skin_color}</p>
      <p>Hair color: {character.hair_color}</p>
      <h2>Films starring {character.name}</h2>
      <FilmList
        films={films.filter((film) =>
          film.characters.includes(`http://swapi.dev/api/people/${id}/`)
        )}
      />
    </div>
  );
};

export default Character;
