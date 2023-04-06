import React, { useState, useEffect } from "react";
import ImageForm from "./ImageForm";
import { fetchImages, createImage, deleteImage, updateImage } from "./ImageUtilis";
import ImageList from "./ImageList";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function ImageFunction() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageToUpdate, setImageToUpdate] = useState(null);
  const { user } = useAuth0();
  
  useEffect(() => {
    const getImages = async () => {
      const fetchedImages = await fetchImages(user.email);
      setImages(fetchedImages);
      setLoading(false);
   
    };
    
    getImages();
  }, []);

  const handleCreateImage = async (newImageData) => {
    const createdImage = await createImage(newImageData);
    if (createdImage) {
      setImages([...images, createdImage]);
    }
  };

  const handleDeleteImage = async (imageId) => {
    const success = await deleteImage(imageId);
    if (success) {
      const updatedImages = images.filter((image) => image._id !== imageId);
      setImages(updatedImages);
    }
  };

  const handleUpdateImage = async (imageId, updateImageData) => {
    console.log(imageId)
    console.log(updateImageData)
    const updatedImage = await updateImage(imageId, updateImageData);
    if (updatedImage) {
      
      const updatedImages = images.map((image) =>
        image._id === imageId ? updatedImage : image
      );
      setImages(updatedImages);
      setImageToUpdate(null);
    }
  };
  const imgUpdateHandler = (image) =>{
    setImageToUpdate(image)
  } 
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