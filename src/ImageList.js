import React from "react";
import Image from "./Image";

const ImageList = ({ images, onDeleteImage, onUpdateImage }) => {
   // create an array of unique categories from the images array
  const categories = [...new Set(images.map((image) => image.category))];

  console.log(images)
  return (
    <div className="image-list">
      {categories.map((category) => (
        <div key={category} className="image-list-category">
          <h2>{category}</h2>
          {/* create a grid of images for the current category */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
             {/* filter the images to only include images from the current category */}
            {images
              .filter((image) => image.category === category)
              // for each image, create an Image component
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





