import React from "react";
import Image from "./Image";

const ImageList = ({ images, onDeleteImage, onUpdateImage }) => {
  const categories = [...new Set(images.map((image) => image.category))];


  console.log(images)
  return (
    <div className="image-list">
      {categories.map((category) => (
        <div key={category} className="image-list-category">
          <h2>{category}</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {images
              .filter((image) => image.category === category)
              .map((image) => (
                <div id={image._id} key={image._id} className="col">
                  <Image image={image}
                  onDeleteImage={onDeleteImage}
                  onUpdateImage={onUpdateImage}
                  />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );

};

export default ImageList;





