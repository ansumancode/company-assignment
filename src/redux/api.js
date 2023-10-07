import axios from "axios";
import { put } from "redux-saga/effects";
import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SET } from "./constant";

export function* getTable(page) {
  try {
    const response = yield axios.get(`http://68.178.162.203:8080/application-test-v1.1/books?page=${page.page}`);
    const api = response.data;
    yield put({ type: FETCH_BOOKS_REQUEST, api: api });
  } catch (error) {
    console.error("Error in getTable:", error);
  }
}

export function* searchTable(data) {
  try {
    const response = yield axios.get(`http://68.178.162.203:8080/application-test-v1.1/books?title=${data.query}`);
    const apiSearch = response.data;
    yield put({ type: FETCH_BOOKS_REQUEST, api: apiSearch });
  } catch (error) {
    console.error("Error in searchTable:", error);
  }
}

export function* addBook(action) {
  try {
    yield axios.post("http://68.178.162.203:8080/application-test-v1.1/books", action.bookData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    yield put({ type: FETCH_BOOKS_SET });
  } catch (error) {
    console.log(error);
  }
}

export function* editBook(action) {
  try {
    yield axios.put(
      `http://68.178.162.203:8080/application-test-v1.1/books/${action.bookData.id}`,
      action.bookData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    yield put({ type: FETCH_BOOKS_SET });
  } catch (error) {
   
    console.error(error);
  }
}
