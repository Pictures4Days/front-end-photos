import React, { useState } from "react";
import axios from "axios";
//import { useAuth0 } from '@auth0/auth0-react'
import { createImage, updateImage } from './ImageUtilis'// eslint-disable-line

const REACT_APP_API = process.env.REACT_APP_API || "api";

const imageData = createImage.data // eslint-disable-line


const Image = ({ image, onDeleteImage, onUpdateImage }) => {
  const [loading, setLoading] = useState(false);
 // const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const handleDeleteClick = async () => {
    try {
      let url = `${REACT_APP_API}/images/${image._id}`;
      setLoading(true);
      await axios.delete(url);
      onDeleteImage(image._id);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateClick = () => {
    console.log('image yo', image);
    //onUpdateImage(image._id, image);
    onUpdateImage(image);
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

// if (this.props.auth0.isAuthenticated) {
//   const res = await this.props.auth0.getIdTokenClaims();

//   const jwt = res.__raw;

//   console.log('token: ', jwt);