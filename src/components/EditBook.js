import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editBookAction } from "../redux/bookActions";

const EditBook = ({ bookData, onCancel }) => {
  const dispatch = useDispatch();
  const [editedBook, setEditedBook] = useState({ ...bookData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({
      ...editedBook,
      [name]: value,
    });
  };

  const handleEditSubmit = () => {
    dispatch(editBookAction(editedBook));

    onCancel();
  };

  return (
    <div className="modal-container">
      <div className="modal-wrapper">
        <h2>Edit Book</h2>
        <form>
          <input
            type="text"
            name="title"
            value={editedBook.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="author"
            value={editedBook.author}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="country"
            value={editedBook.country}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="language"
            value={editedBook.language}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="pages"
            value={editedBook.pages}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="year"
            value={editedBook.year}
            onChange={handleInputChange}
          />
          <input
            type="url"
            name="link"
            value={editedBook.link}
            onChange={handleInputChange}
          />

          <button type="button" onClick={handleEditSubmit}>
            Save
          </button>
          <span className="close" onClick={onCancel}>
            X
          </span>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
