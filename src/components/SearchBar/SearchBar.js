import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="search">
      {/* <div className="searchicon"> */}
      <FaSearch />
      {/* </div> */}
      <input className="input" placeholder="Search for movies or TV series" />
    </div>
  );
};

export default SearchBar;
