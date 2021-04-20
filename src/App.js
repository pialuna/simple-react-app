// components
import Navbar from "./components/Navbar";
import FilmList from "./components/FilmList";
import Favorites from "./components/Favorites";
// data
import films from "./dummyData/films";

function App() {
  return (
    <>
      <Navbar />

      <div className="p-4">
        <Favorites
          films={films.filter((film) => film.title === "A New Hope")}
        />
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
    </>
  );
}

export default App;
