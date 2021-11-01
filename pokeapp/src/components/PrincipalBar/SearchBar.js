import React, { useState } from "react";
import "./SearchBar.css";
import { searchPokemon } from "../../api";

export default function SearchBar(props) {
 const { onSearch } = props;

 const [search, setSearch] = useState("");

 const handleChange = (e) => {
  setSearch(e.target.value);
  if (e.target.value.length === 0) {
   onSearch(null);
  }
 };

 const onclick = async (e) => {
  onSearch(search);
 };

 return (
  <div className="seach__bar">
   <input
    className="input__pokemon"
    type="text"
    placeholder="Find your pokemon"
    onChange={handleChange}
   />
   <button className="button__pokemon" onClick={onclick}>
    Search
   </button>
  </div>
 );
}
