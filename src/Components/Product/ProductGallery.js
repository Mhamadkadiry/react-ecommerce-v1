import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import GetProductDetailsHook from "../../Hooks/Product/GetProductDetailsHook";
import defaultImage from "../../Assets/defaultImage.jpeg";

const ProductGallery = () => {
  const { id } = useParams();
  const [product, images] = GetProductDetailsHook(id);
  console.log(images);
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
