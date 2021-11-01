import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokemon, getPokemonData, searchPokemon } from "../api";
import Pokedex from "./Pokedex";
import PrincipalBar from "./PrincipalBar/PrincipalBar";
import SearchBar from "./PrincipalBar/SearchBar";

function PokedexCards(props) {
 const [pokemons, setPokemons] = useState([]);
 const [page, setPage] = useState(0);
 const [total, setTotal] = useState(0);
 const [loading, setLoading] = useState(true);
 const [notFound, setnotFoun] = useState(false);

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
   setnotFoun(false);
  } catch (err) {}
 };

 useEffect(() => {
  fetchPokemons();
 }, [page]);

 const onSearch = async (pokemon) => {
  if (!pokemon) {
   return fetchPokemons();
  }
  setLoading(true);
  const result = await searchPokemon(pokemon);
  if (!result) {
   setnotFoun(true);
   setLoading(false);
   return;
  } else {
   setPokemons([result]);
  }

  setLoading(false);
 };

 return (
  <div>
   {loading ? (
    <div className="loading__pokemons">Cargando..</div>
   ) : (
    <div>
    <Link to='/' style={{textDecoration:"none"}}><PrincipalBar title='Pokemon Api' /></Link>
     
     <SearchBar onSearch={onSearch} />
     {notFound ? (
      <div className="notfound__line">no se encontro a tu Pokemon</div>
     ) : (
      <Pokedex
       pokemons={pokemons}
       page={page}
       setPage={setPage}
       total={total}
      />
     )}
    </div>
   )}
  </div>
 );
}

export default PokedexCards;
