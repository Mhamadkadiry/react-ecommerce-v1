import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import mobile from "../../Assets/mobile.png";
import laptop from "../../Assets/laptop.png";

import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
const ProductGallery = () => {
  const images = [
    {
      original: `${mobile}`,
    },
    {
      original: `${laptop}`,
    },
    {
      original: `${mobile}`,
    },
  ];
  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2"
    >
      <ImageGallery
        items={images}
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
