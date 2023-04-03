import React, { useState } from "react";

const PhotoForm = ({ onCreatePhoto }) => {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
}

const handleSubmit = (event) => {
  event.preventDefault();


  const newImage = {
    title,
    img_url: imgUrl,
    description,
    category
  };

  onCreatePhoto(newImage);

  setTitle("");
  setImgUrl("");
  setDescription("");
  setCategory("");
};

return (
  <div className="mb-4">
    <h2>Add a Image</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="titleInput">Title</label>
        <input
          type="text"
          className="form-control"
          id="titleInput"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="imgUrlInput">Image URL</label>
        <input
          type="text"
          className="form-control"
          id="imgUrlInput"
          value={imgUrl}
          onChange={(event) => setImgUrl(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="descriptionInput">Description</label>
        <textarea
          className="form-control"
          id="descriptionInput"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="categoryInput">Category</label>
        <input
          type="text"
          className="form-control"
          id="categoryInput"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Photo
      </button>
    </form>
  </div>
);







export default PhotoForm;


