import React, { useState, useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import ImageForm from './ImageForm';
import { fetchImages, createImage, deleteImage, updateImage } from "./ImageUtilis";
import './App.css';


function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      const fetchedImages = await fetchImages();
      setImages(fetchedImages);
      setLoading(false);
    }

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
      const updatedImages = images.filter((image) => image.id !== imageId
      );
      setImages(updatedImages);
    }
  };

  const handleUpdateImage = async (imageId, updateImageData) => {
    const updatedImage = await updateImage(imageId, updateImageData);
    if (updatedImage) {
      const updatedImages = images.map((image) =>
        image.id === imageId ? updatedImage : image
      );
      setImages(updatedImages);
    }
  };

  if (loading) {
    return <p>Loading images...</p>
  }

  return (
    <div>
    <Header />
        <div className="container">
          <h1>My Image Gallery</h1>
          <ImageForm onCreateImage={handleCreateImage} />
          <hr />
        </div>
      <Footer />
    </div>
  );
}

export default App;
