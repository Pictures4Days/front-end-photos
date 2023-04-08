import React, { useState, useEffect } from "react";
import ImageForm from "./ImageForm";
import { fetchImages, createImage, deleteImage, updateImage } from "./ImageUtilis";
import ImageList from "./ImageList";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function ImageFunction() {

  // Set the initial state
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);// eslint-disable-line
  const [imageToUpdate, setImageToUpdate] = useState(null);
  const { user } = useAuth0();
  
  // Fetch images on component mount
  useEffect(() => {
    const getImages = async () => {
      const fetchedImages = await fetchImages(user.email);
      setImages(fetchedImages);
      setLoading(false);
   
    };
    
    getImages();
  }, []);// eslint-disable-line

  // Function to handle creating a new image
  const handleCreateImage = async (newImageData) => {
    const createdImage = await createImage(newImageData);
    if (createdImage) {
      setImages([...images, createdImage]);// update the images array with the new image
    }
  };

  // Function to handle deleting an image
  const handleDeleteImage = async (imageId) => {
    const success = await deleteImage(imageId);
    if (success) {
      const updatedImages = images.filter((image) => image._id !== imageId);
      setImages(updatedImages);// update the images array by removing the deleted image
    }
  };

  // Function to handle updating an image
  const handleUpdateImage = async (imageId, updateImageData) => {
    console.log(imageId)
    console.log(updateImageData)
    const updatedImage = await updateImage(imageId, updateImageData);
    if (updatedImage) {
      
      const updatedImages = images.map((image) =>
        image._id === imageId ? updatedImage : image
      );
      setImages(updatedImages);// set the updated images array
      setImageToUpdate(null);// reset the image to be updated to null
    }
  };
  // Function to handle updating the image to be edited
  const imgUpdateHandler = (image) =>{
    setImageToUpdate(image)
  } 
  // Render the component
  return (
    <div>
      <div className="container">
        <h1>My Image Gallery</h1>
          <ImageForm
            currentImage={imageToUpdate}
            onUpdateImage={handleUpdateImage}
            onCreateImage={handleCreateImage}
          />
        <hr />
        <ImageList
          images={images}
          onDeleteImage={handleDeleteImage}
          onUpdateImage={imgUpdateHandler}
        />
      </div>
    </div>
  );
}

export default ImageFunction;