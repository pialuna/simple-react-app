import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
import Films from "./components/Films";
import Characters from "./components/Characters";
import Favorites from "./components/Favorites";
import NotFound from "./components/NotFound";
// data
import filmsData from "./dummyData/films";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="p-4">
          <Switch>
            <Route exact path="/">
              <Films />
            </Route>
            <Route path="/films">
              <Films />
            </Route>
            {/* <Route path="/films/:id" children={<Film />}></Route> */}
            <Route path="/characters">
              <Characters />
            </Route>
            {/* <Route path="/characters/:id" children={<Character />}></Route> */}
            <Route path="/favorites">
              <Favorites
                films={filmsData.filter((film) => film.title === "A New Hope")}
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
