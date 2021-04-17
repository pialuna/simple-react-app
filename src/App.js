import "./App.css";
import films from "./dummyData/films.js";

function FilmList() {
  return (
    <>
      <ul>
        <li>
          <Film img="https://picsum.photos/100/150" title="Film 1"></Film>
        </li>
      </ul>
    </>
  );
}

function Film({ img, title }) {
  return (
    <div>
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FilmList />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
