import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const ImageForm = ({ onCreateImage, onUpdateImage, currentImage }) => {
  
  const [title, setTitle] = useState(currentImage ? currentImage.title : "");
  const [imgUrl, setImgUrl] = useState(
    currentImage ? currentImage.imgUrl : ""
  );
  const [description, setDescription] = useState(
    currentImage ? currentImage.description : ""
  );
  const [category, setCategory] = useState(
    currentImage ? currentImage.category : ""
  );
  
  const { user, isAuthenticated, isLoading } = useAuth0();// eslint-disable-line
  const handleSubmit = (event) => {
    event.preventDefault();
    let userEmail=user.email;
    const newImage = {
      title,
      imgUrl,
      description,
      category,
      userEmail,
    };
    console.log("NEW IMAGE IS HERE!",newImage)
    if (currentImage) {
      console.log(currentImage)
      onUpdateImage(currentImage._id, newImage);
    } else {
      onCreateImage(newImage);
    }

    setTitle("");
    setImgUrl("");
    setDescription("");
    setCategory("");
  };

  return (
    <div className="mb-4">
      <h2>{currentImage ? "Update" : "Add"} an Image</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titleInput">Title</label>
          <input
            type="text"
            className="form-control"
            id="titleInput"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter your picture title"
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
            placeholder="Enter the image URL here"
          />
        </div>
        <div className="form-group">
          <label htmlFor="descriptionInput">Description</label>
          <textarea
            className="form-control"
            id="descriptionInput"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Enter a description about the picture here"
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
            placeholder="Enter a new category or currently exsisting category"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {currentImage ? "Update" : "Add"} Photo
        </button>
      </form>
    </div>
  );
};

export default ImageForm;
