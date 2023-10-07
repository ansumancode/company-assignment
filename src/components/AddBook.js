import { useDispatch } from "react-redux";
import { addBookAction } from "../redux/bookActions";

const AddBook = ({ setAddBook }) => {
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();

    const bookData = {
      title: e.target.title.value,
      author: e.target.author.value,
      country: e.target.country.value,
      language: e.target.language.value,
      pages: e.target.pages.value,
      year: e.target.year.value,
      link: e.target.link.value,
    };

    dispatch(addBookAction(bookData));

    e.target.reset();
  };

  return (
    <div className="modal-container">
      <div className="modal-wrapper">
        <h2>Add a Book</h2>
        <form onSubmit={handleAddBook}>
          <input type="text" name="title" placeholder="Title" required />
          <input type="text" name="author" placeholder="Author" required />
          <input type="text" name="country" placeholder="Country" required />
          <input type="text" name="language" placeholder="Language" required />
          <input type="text" name="pages" placeholder="Pages" required />
          <input type="text" name="year" placeholder="Year" required />
          <input type="url" name="link" placeholder="Link" required />
          <button type="submit">Add Book</button>

          <span className="close" onClick={() => setAddBook(false)}>
            X
          </span>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
