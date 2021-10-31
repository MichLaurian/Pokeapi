import React, { useEffect, useState } from "react";
import { getPokemon, getPokemonData } from "../api";
import Pokedex from "./Pokedex";

function PokedexCards() {
 const [pokemons, setPokemons] = useState([]);
 const [page, setPage] = useState(0);
 const [total, setTotal] = useState(0);
 const [loading, setLoading] = useState(true);

 const fetchPokemons = async () => {
  try {
   const data = await getPokemon(25, 25 * page);
   // console.log(data)
   // setPokemons(data.results)
   //   (data.results)
   const promises = data.results.map(async (pokemon) => {
    return await getPokemonData(pokemon.url);
   });
   const results = await Promise.all(promises);
   setPokemons(results);
   setLoading(false);
   setTotal(Math.ceil(data.count / 25));
  } catch (err) {}
 };

 useEffect(() => {
  fetchPokemons();
 }, [page]);

 return (
  <div>
   {loading ? (
    <div className="loading__pokemons">Cargando..</div>
   ) : (
    <Pokedex pokemons={pokemons} 
        page={page}
        setPage={setPage}
        total={total}
    />
   )}
  </div>
 );
}

export default PokedexCards;
