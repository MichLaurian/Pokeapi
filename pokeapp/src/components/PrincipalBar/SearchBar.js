import React, { useState } from "react";
import "./SearchBar.css";
import { searchPokemon } from "../../api";

export default function SearchBar() {
 const [search, setSearch] = useState("");

 const handleChange = (e) => {
  setSearch(e.target.value);
 };

 const handleClick = async (e) => {
  // console.log('click')
  const data = await searchPokemon(search);
//   console.log(data);
 };

 return (
  <div className="seach__bar">
   <input
    className="input__pokemon"
    type="text"
    placeholder="Find your pokemon"
    onChange={handleChange}
   />
   <button className="button__pokemon" onClick={handleClick}>
    Search
   </button>
  </div>
 );
}
