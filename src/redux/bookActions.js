import {
  FETCH_BOOKS_SET,
  SET_SEARCH_LIST,
  ADD_BOOK,
  EDIT_BOOK,
} from "./constant";

export const fetchBookstListAction = (page) => {
  return {
    type: FETCH_BOOKS_SET,
    page,
  };
};

export const fetchBookstListSearchAction = (query) => {
  return {
    type: SET_SEARCH_LIST,
    query,
  };
};

export const addBookAction = (bookData) => {
  return {
    type: ADD_BOOK,
    bookData,
  };
};

export const editBookAction = (bookData) => {
  return {
    type: EDIT_BOOK,
    bookData,
  };
};
