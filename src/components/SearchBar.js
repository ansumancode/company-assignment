import React, { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { fetchBookstListSearchAction } from "../redux/bookActions";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch()
  const handleSearch = () => {
    dispatch(fetchBookstListSearchAction(searchQuery));
  };
  return (
    <div className="container">
      <div className="input-wrapper">
        <input
          type="search"
          className="search-input"
          placeholder="Search by title..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="button"
          className="btn"
          onClick={handleSearch}
        >
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
