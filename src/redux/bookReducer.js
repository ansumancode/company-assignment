import { FETCH_BOOKS_REQUEST, ADD_BOOK } from "./constant";

const initialState = [];

export const fetchBookListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return [action];
    case ADD_BOOK:
      return [...state, action.bookData];
    default:
      return state;
  }
};
