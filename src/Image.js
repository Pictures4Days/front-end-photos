import React, { useState } from "react";
import axios from "axios";
//import { useAuth0 } from '@auth0/auth0-react'
import { createImage, updateImage } from './ImageUtilis' // eslint-disable-line

const REACT_APP_API = process.env.REACT_APP_API || "api";

const imageData = createImage.data // eslint-disable-line


const Image = ({ image, onDeleteImage, onUpdateImage }) => {
  const [loading, setLoading] = useState(false);

  // handle delete image click
  const handleDeleteClick = async () => {
    try {
      let url = `${REACT_APP_API}/images/${image._id}`;
      setLoading(true);
      await axios.delete(url);
      // remove the image from the list
      onDeleteImage(image._id);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // handle update image click
  const handleUpdateClick = () => {
    onUpdateImage(image);
  };

  //card for each image 
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