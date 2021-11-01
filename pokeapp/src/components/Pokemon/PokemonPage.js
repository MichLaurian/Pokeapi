
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokemonPage } from "../../api";

function PokemonPage({ match }) {
 const id = match.params.id;
 // console.log(id)

 const [pokemonDetails, setPokemonDetails] = useState([]);
 const [loading, setLoading] = useState(true);

 const getPokemons = async (id) => {
  const details = await getPokemonPage(id);
  setPokemonDetails(details);
//   console.log(details);
  setLoading(false);
 };

 useEffect(() => {
  getPokemons(id);
 }, []);
 return (
  <div className="pokemon__page">
   <h1>
    {pokemonDetails.name} #00{pokemonDetails.id}
   </h1>
   {loading ? ( 
    <div>Loading pokemon</div>
   ) : (
    <div className="card__pokemon">
     <div className="img__pokemon">
      <img
       className="img__pokemon"
       src={pokemonDetails.sprites.front_default}
       alt="Img pokemon"
      />
     </div>
     <div className="row__details">
      <div className="weight__pokemon">
       <p>
        <strong>Weight</strong>
       </p>
       {pokemonDetails.weight} kg.
      </div>
      <div className="height__pokemon">
       <p>
        <strong>Height</strong>
       </p>
       {pokemonDetails.height} m.
      </div>
      <div className="card__details">
       <strong>Tipo:</strong>
       {pokemonDetails.types.map((t) => (
        <div key={t.type.name}>
         <div className="type__pokemon">{t.type.name.toUpperCase()}</div>
        </div>
       ))}
      </div>
      <div className="card__abilities">
       <strong>Habilidades</strong>
       {pokemonDetails.abilities.map((a) => (
        <div key={a.ability.name}>
         <div className="type__pokemon">{a.ability.name.toUpperCase()}</div>
        </div>
       ))}
      </div>
     </div>
    </div>
   )}
   <div className="back__button">
    <Link to="/" style={{textDecoration:"none"}}>
     <button className="button__back">Volver</button>
    </Link>
   </div>
  </div>
 );
}

export default PokemonPage;
