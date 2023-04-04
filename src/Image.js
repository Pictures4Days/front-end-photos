import React, { useState } from "react";
import axios from "axios";

const REACT_APP_API = process.env.REACT_APP_API || "api";

const Image = ({ image, onDeleteImage, onUpdateImage }) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteClick = async () => {
    try {
      setLoading(true);
      await axios.delete(`${REACT_APP_API}/images/${image.id}`);
      onDeleteImage(image.id);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateClick = () => {
    onUpdateImage(image.id, image);
  };

  return (
    <div className="card">
      <img className="card-img-top" src={image.imgUrl} alt={image.title} />
      <div className="card-body">
        <h5 className="card-title">{image.title}</h5>
        <p className="card-text">{image.description}</p>
        <p className="card-text">
          <small className="text-muted">{image.category}</small>
        </p>
        <button
          className="btn btn-danger"
          onClick={handleDeleteClick}
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete"}
        </button>
        <button className="btn btn-primary ml-2" onClick={handleUpdateClick}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Image;
