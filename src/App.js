import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageForm from "./ImageForm";
import { fetchImages, createImage, deleteImage, updateImage } from "./ImageUtilis";
import ImageList from "./ImageList";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageToUpdate, setImageToUpdate] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      const fetchedImages = await fetchImages();
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
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;