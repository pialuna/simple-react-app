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
  const [films, setFilms] = useState([]);
  const [characters, setCharacters] = useState([]);
  // todo: favorites

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

  //   console.log(films);
  //   console.log(characters);

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
              <Films films={films} />
            </Route>
            {/* <Route path="/films/:id" children={<Film films={films} />}></Route> */}
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
