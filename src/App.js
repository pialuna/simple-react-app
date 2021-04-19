import "./App.css";
// components
import FilmList from "./FilmList";
import Favorites from "./Favorites";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <Favorites />
      <FilmList />

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
