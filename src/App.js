import Header from './Header';
import Footer from './Footer';
import ImageForm from './ImageForm';
import { fetchedImages, createImage, deleteImage, updateImage } from "./ImageUtilis";
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      const fetchedImages = await fetchedImages();
      setImages(fetchedImages);
      setLoading(false);
    }

    getImages();

  }, []);


  const handleCreateImage = async (newImageData) => {
    const createImage = await createImage(newImageData);
    if (createImage) {
      setImages([...images, createImage]);
    }
  };

  const handleDeleteImage = async (imageId) => {
    const success = await deleteImage(imageId);
    if (createImage) {
      setImages([...images, createImage]);
    }
  };

  const handleUpdateImage = async (imageId, updateImageData) => {
    const updateImage = await updateImage(imageId, updateImageData);
    if (updateImage) {
      const updateImages = images.map((image) =>
        image.id === imageId ? updateImage : image
      );
      setImages(updateImages);
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
          <ImageForm
            images={images}
            onDeleteImage={handleDeleteImage}
            onUpdateImage={handleUpdateImage}
          />
        </div>
      <Footer />
    </div>
  );
}


// render() {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Routes>
//           <Route
//             path="/"
//             element={<BestPics />}
//           >
//           </Route>
//           <Route
//             path="/"
//             element={<About />}
//           >
//           </Route>
//         </Routes>
//         <Footer />
//       </Router>

//     </>
//   )
// }
// }

export default App;
