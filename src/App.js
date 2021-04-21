import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
import Films from "./components/Films";
import Film from "./components/Film";
import Characters from "./components/Characters";
import Character from "./components/Character";
import Favorites from "./components/Favorites";
import NotFound from "./components/NotFound";

function App() {
  // fetched data
  const [films, setFilms] = useState([]);
  // to do: currently only fetches the first 10 characters
  const [characters, setCharacters] = useState([]);
  // saved favorites
  // to do: how to access these states from children? need redux?
  const [favoriteFilms, setFavoriteFilms] = useState([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  // api calls
  useEffect(() => {
    async function fetchFilms() {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      setFilms(data.results);
    }
    async function fetchCharacters() {
      const response = await fetch("https://swapi.dev/api/people/");
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchFilms();
    fetchCharacters();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <div className="p-4">
          <Switch>
            <Route exact path="/">
              <Films films={films} />
            </Route>
            <Route exact path="/films">
              <Films films={films} setFavoriteFilms={setFavoriteFilms} />
            </Route>
            <Route path="/films/:id">
              <Film />
            </Route>
            <Route exact path="/characters">
              <Characters characters={characters} />
            </Route>
            <Route path="/characters/:id">
              <Character />
            </Route>
            <Route path="/favorites">
              {/* to do */}
              {/* currently hard-coded favorites */}
              <Favorites
                films={films.filter((film) => film.title === "A New Hope")}
                characters={characters.filter(
                  (character) => character.name === "Luke Skywalker"
                )}
              />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
