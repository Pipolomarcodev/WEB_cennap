import React, { useState } from "react";
import { images } from "../../../constants";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const ModalGallery = () => {
  const [showNav, setShowNav] = useState(false);

  const handleScreenChange = (fullScreenElement) => {
    setShowNav(!fullScreenElement); // Invierte el valor de showNav cuando cambia el modo de pantalla completa
  };

  const galleryImages = [
    {
      original: images.cafe,
    },
    {
      original: images.platosComida,
    },
    ,
    {
      original: images.platosComida,
    },
  ];

  return (
    <>
      <div
        style={{
          width: "400px",
          height: "200px",
        }}
      >
        <ImageGallery
          items={galleryImages}
          showPlayButton={false}
          useBrowserFullscreen={false}
          autoPlay={false}
          showNav={false}
          disableKeyDown={true}
          showBullets={true}
          thumbnailPosition="top"
        />
      </div>
      <div>
        <img src={images.platosComida} alt="img2" />
      </div>
      <div>
        <img src={images.platosComida} alt="img3" />
      </div>
      <div>
        <img src={images.platosComida} alt="img4" />
      </div>
      <div>
        <img src={images.platosComida} alt="img5" />
      </div>
    </>
  );
};

export default ModalGallery;
