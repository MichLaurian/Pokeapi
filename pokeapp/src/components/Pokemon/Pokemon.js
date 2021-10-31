import React from "react";

const Pokemon = (props) => {
 const { pokemon } = props;

 // console.log(pokemon)
 return (
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
 );
};

export default Pokemon;
