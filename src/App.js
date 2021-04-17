import "./App.css";
import films from "./dummyData/films.js";

function FilmList() {
  return (
    <section className="filmlist">
      {films.map((film) => {
        return (
          <Film
            key={film.episode_id}
            img="https://picsum.photos/70/100"
            title={film.title}
          ></Film>
        );
      })}
    </section>
  );
}

function Film({ img, title }) {
  return (
    <div className="film">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <div>
        <button>Like</button>
        <button>Details</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

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
