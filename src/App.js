import "./App.css";
// components
import FilmList from "./FilmList";
import Favorites from "./Favorites";
// data
import films from "./dummyData/films";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <Favorites films={films.filter((film) => film.title === "A New Hope")} />
      <hr />
      <h1>All Films</h1>
      <FilmList films={films} />

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
