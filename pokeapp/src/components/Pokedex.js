import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon/Pokemon";


function Pokedex(props) {
 // console.log(props)

 const { pokemons, page, setPage, total } = props;

 const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

 return (
  <div >
   <div className="paginations__container">
    <Pagination
     page={page + 1}
     totalPages={total}
     onLeftclick={lastPage}
     onRightClick={nextPage}
    />
   </div>
   <div className="pokedex__grid">
    {pokemons.map((pokemon, idx) => {
     return <Pokemon pokemon={pokemon} key={pokemon.name} />;
    })}
   </div>
  </div>
 );
}

export default Pokedex;
