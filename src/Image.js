import React, { useState } from "react";
import axios from "axios";

const Image = ({ Image, onDelete }) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteClick = async () => {
    try {
      setLoading(true);
      await axios.delete(`${REACT_APP_API}/images/${Image.id}`);
      onDelete(Image.id);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <img className="card-img-top" src={Image.img_url} alt={Image.title} />
      <div className="card-body">
        <h5 className="card-title">{Image.title}</h5>
        <p className="card-text">{Image.description}</p>
        <p className="card-text">
          <small className="text-muted">{Image.category}</small>
        </p>
        <button
          className="btn btn-danger"
          onClick={handleDeleteClick}
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default Image;