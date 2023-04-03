import Header from './Header';
import Footer from './Footer';
import Image from './BestPics';
import PhotoForm from './PhotoForm';
import PhotoUtils from './PhotoUtilis';

import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPhotos = async () => {
      const fetchedPhotos = await fetchedPhotos();
      setPhotos(fetchedPhotos);
      setLoading(false);
    }

    getPhotos();

  }, []);


  const handleCreatePhoto = async (newPhotoData) => {
    const createdPhoto = await createdPhoto(newPhotoData);
    if (createdPhoto) {
      setPhotos([...photos, createdPhoto]);
    }
  };

  const handleDeletePhoto = async (photoId) => {
    const success = await deletePhoto(photoId);
    if (createdPhoto) {
      setImages([...photos, createdPhoto]);
    }
  };

  const handleUpdatePhoto = async (photoId, updatedPhotoData) => {
    const updatedPhoto = await updatedPhoto(photoId, updatedPhotoData);
    if (updatedPhoto) {
      const updatedPhotos = photos.map((photo) =>
        photo.id === photoId ? updatedPhoto : photo
      );
      setPhotos(updatedPhotos);
    }
  };

  if (loading) {
    return <p>Loading photos...</p>
  }

  return (
    <div className="container">
      <h1>My Photo Gallery</h1>
      <PhotoForm onCreatePhoto={handleCreatePhoto} />
      <hr />
      <PhotoList
        photos={photos}
        onDeletePhoto={handleDeletePhoto}
        onUpdatePhoto={handleUpdatePhoto}
      />
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
