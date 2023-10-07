import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBookstListAction,
  fetchBookstListSearchAction,
} from "../redux/bookActions";
import EditBook from "./EditBook";

const BookList = () => {
  const dispatch = useDispatch();
  const getDataRender = useSelector((state) => state);
  const [editingBook, setEditingBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [sortBy, setSortBy] = useState("year");

  const [api] = getDataRender.fetchBookListReducer;
  const allBooks = api?.api?.data || [];

  const extractUniqueCountries = () => {
    const uniqueCountries = [...new Set(allBooks.map((book) => book.country))];
    return uniqueCountries;
  };

  const uniqueCountries = extractUniqueCountries();

  useEffect(() => {
    if (api?.api?.pagination) {
      setTotalPages(api.api.pagination.totalPages);
    }
  }, [api]);

  useEffect(() => {
    if (searchQuery) {
      dispatch(
        fetchBookstListSearchAction(
          searchQuery,
          currentPage,
          selectedCountry,
          sortBy
        )
      );
    } else {
      dispatch(fetchBookstListAction(currentPage, selectedCountry, sortBy));
    }
  }, [currentPage, searchQuery, selectedCountry, sortBy]);

  const handleEditClick = (bookData) => {
    setEditingBook(bookData);
  };

  const handleEditCancel = () => {
    setEditingBook(null);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCountryFilterChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortBooks = (books) => {
    switch (sortBy) {
      case "year":
        return books.sort((a, b) => a.year - b.year);
      case "yearDesc":
        return books.sort((a, b) => b.year - a.year);
      default:
        return books;
    }
  };

  const sortedBooks = sortBooks(allBooks);

  const buttonsToDisplay = [];
  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i > 0 && i <= totalPages) {
      buttonsToDisplay.push(i);
    }
  }

  return (
    <div className="container">
      {editingBook && (
        <EditBook bookData={editingBook} onCancel={handleEditCancel} />
      )}

      <div className="wrapper">
        <div className="filter-sort">
          <div className="filter-input">
            <label htmlFor="countryFilter">Filter by Country:</label>
            <select
              id="countryFilter"
              onChange={handleCountryFilterChange}
              value={selectedCountry}
            >
              <option value="">All</option>
              {uniqueCountries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-input">
            <label htmlFor="sort">Sort by Year:</label>
            <select id="sort" onChange={handleSortChange} value={sortBy}>
              <option value="year">Oldest to Latest</option>
              <option value="yearDesc">Latest to Oldest</option>
            </select>
          </div>
        </div>
        <ul>
          {sortedBooks
            .filter((book) =>
              selectedCountry ? book.country === selectedCountry : true
            )
            .map((allData, i) => {
              return (
                <li key={i}>
                  <div className="listing">
                    <h2 className="card-title">{allData.title}</h2>
                    <p>
                      <strong>Author:</strong> {allData.author}
                    </p>
                    <p>
                      <strong>Country:</strong> {allData.country}
                    </p>
                    <p>
                      <strong>Language:</strong> {allData.language}
                    </p>
                    <p>
                      <strong>Pages:</strong> {allData.pages}
                    </p>
                    <p>
                      <strong>Year:</strong> {allData.year}
                    </p>
                    <p>
                      <strong>Link:</strong>{" "}
                      <a href={allData.link}>Check Link</a>
                    </p>
                    <button
                      className="btn-secondary"
                      onClick={() => handleEditClick(allData)}
                    >
                      Edit
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        {buttonsToDisplay.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={currentPage === pageNumber ? "active" : ""}
          >
            {pageNumber}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BookList;
