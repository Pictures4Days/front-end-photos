import React from "react";
import Image from "./Image";

const ImageList = ({ Images }) => {
  const categories = [...new Set(Images.map((Image) => Image.category))];



  return (
    <div className="Image-list">
      {categories.map((category) => (
        <div key={category} className="Image-list-category">
          <h2>{category}</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {Images
              .filter((Image) => Image.category === category)
              .map((Image) => (
                <div key={Image.id} className="col">
                  <Image Image={Image} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );

};

export default ImageList;





