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
      original:
        "/public/Carbonada/Captura de pantalla de 2023-12-07 19-17-44.png",
    },
    {
      original:
        "../../../../public/Carbonada/Captura de pantalla de 2023-12-07 19-18-50.png",
    },
    ,
    {
      original:
        "../../../../public/tandory/Captura de pantalla de 2023-12-07 18-51-29.png",
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
        <img
          src={
            "../../.../../../../public/Carbonada/Captura de pantalla de 2023-12-07 19-17-11.png"
          }
          alt="img2"
        />
      </div>
      <div>
        <img
          src={
            "../../../../public/Negroni/Captura de pantalla de 2023-12-07 19-00-00.png"
          }
          alt="img3"
        />
      </div>
      <div>
        <img
          src={
            "../../../../public/tandory/Captura de pantalla de 2023-12-07 18-51-29.png"
          }
          alt="img4"
        />
      </div>
      <div>
        <img src={images.platosComida} alt="img5" />
      </div>
    </>
  );
};

export default ModalGallery;
