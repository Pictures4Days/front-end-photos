import React from "react";
import Photo from "./Photo";

const PhotoList = ({ photos }) => {
  const categories = [...new Set(photos.map((photo) => photo.category))];



  return (
    <div className="photo-list">
      {categories.map((category) => (
        <div key={category} className="photo-list-category">
          <h2>{category}</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {photos
              .filter((photo) => photo.category === category)
              .map((photo) => (
                <div key={photo.id} className="col">
                  <Photo photo={photo} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );

};

export default PhotoList;





