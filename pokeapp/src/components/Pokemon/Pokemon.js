import React from "react";
import { Link } from "react-router-dom";

const Pokemon = (props) => {
 const { pokemon } = props;

 // console.log(pokemon)
 return (
    <Link to={`/pokemon/${pokemon.id}`} style={{textDecoration:"none"}}>
  <div className="pokemon__card">
   <div className="pokemon__img-container">
    <img
     src={pokemon.sprites.front_default}
     alt={pokemon.name}
     className="pokemon__img"
    />
   </div>
   <div className="pokemon__body">
   
   <h3>{pokemon.name}</h3>
    <div># {pokemon.id}</div>
   </div>
  </div>
  </Link>
 );
};

export default Pokemon;
