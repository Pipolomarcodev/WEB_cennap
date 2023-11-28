import styles from "./Footer.module.css";
import { imagesFooter } from "../../constants";

/**************************************************************/
/********************  FOOTER  COMPONENT **********************/
/**************************************************************/

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/********************  ISOLOGO **********************/}

      <div className="containerisologo">
        <img
          className={styles.isologo}
          src={imagesFooter.logo}
          alt="enterprise-isologo"
          tabIndex="0"
        />
      </div>

      {/******************** CREDITS **********************/}

      <div className={styles.footerMark}>
        <p name="robots" content="noindex">
          Powered by © cenapp 2023. All rights reserved.
        </p>
      </div>

      {/***************** SOCIAL MEDIA **********************/}

      <div className={styles.socialIcons}>
        <a
          className={styles.socialIconLink}
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.socialIcon}
            src={imagesFooter.facebook}
            alt="Facebook-icon"
            tabIndex="0"
          />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer">
          <img
            className={styles.socialIcon}
            src={imagesFooter.tiktok}
            alt="Tik-tok-icon"
            tabIndex="0"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img
            className={styles.socialIcon}
            src={imagesFooter.instagram}
            alt="Instagram-icon"
            tabIndex="0"
          />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
          <img
            className={styles.socialIcon}
            src={imagesFooter.whatsapp}
            alt="whatsapp-icon"
            tabIndex="0"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
