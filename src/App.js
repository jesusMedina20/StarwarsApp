import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/navbar/navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PeoplePage from "./page/people";
import FilmsPage from "./page/films";
import PlanetsPage from "./page/planets";
import StarshipsPage from "./page/starships";
import VehiclesPage from "./page/vehicles";
import SpeciesPage from "./page/species";
import Details from "./page/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/people" element={<PeoplePage />} />
          <Route path="/details/:type/:id" element={<Details />} />

          <Route exact path="/films" element={<FilmsPage />} />

          <Route exact path="/planets" element={<PlanetsPage />} />
          <Route path="/species" element={<SpeciesPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/starships" element={<StarshipsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
