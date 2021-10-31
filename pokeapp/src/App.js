import { Route, Switch } from "react-router";

import "./App.css";
import Pokedex from "./components/Pokedex";

import PokedexCards from "./components/PokedexCards";

import PrincipalBar from "./components/PrincipalBar/PrincipalBar";
import SearchBar from "./components/PrincipalBar/SearchBar";

function App(props) {
 return (
  <div className="">
   <header className="header">
    <PrincipalBar title="Pokemon Api" />
   </header>
   <SearchBar />
   <PokedexCards />
  </div>
 );
}

export default App;
