import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import defaultImage from "../../Assets/defaultImage.jpeg";

const ProductGallery = ({ images }) => {
  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2"
    >
      <ImageGallery
        items={images}
        onErrorImageURL={defaultImage}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
};

export default ProductGallery;
