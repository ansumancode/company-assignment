import { getTable, searchTable, addBook, editBook } from "./api";
import { takeEvery } from "redux-saga/effects";
import {
  FETCH_BOOKS_SET,
  SET_SEARCH_LIST,
  ADD_BOOK,
  EDIT_BOOK,
} from "./constant";

function* getDataSaga() {
  yield takeEvery(FETCH_BOOKS_SET, getTable);
  yield takeEvery(SET_SEARCH_LIST, searchTable);
  yield takeEvery(ADD_BOOK, addBook);
  yield takeEvery(EDIT_BOOK, editBook);
}

export default getDataSaga;
