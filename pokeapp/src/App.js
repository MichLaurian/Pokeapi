import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import PokedexCards from "./components/PokedexCards";
import PokemonPage from "./components/Pokemon/PokemonPage";

function App() {
 return (
  <Router>
   <Route exact path="/" component={PokedexCards} />
   <Route path="/pokemon/:id" component={PokemonPage} />
  </Router>
 );
}

export default App;
