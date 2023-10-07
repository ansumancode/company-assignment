import { useState } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BooksList";
import SearchBar from "./components/SearchBar";

function App() {
  const [addBook, setAddBook] = useState(false);
  const addBookModal = () => {
    setAddBook(true);
  };

  return (
    <div className="App">
      {addBook && (
        <AddBook addBookModal={addBookModal} setAddBook={setAddBook} />
      )}

      <SearchBar />
      <div className="add-button">
        <div className="btn-wrapper">
          <button onClick={addBookModal}>Add Books</button>
        </div>
      </div>
      <BookList />
    </div>
  );
}

export default App;
