import React, { useState, useEffect } from 'react';
import styles from './userprofile.module.css'; 

/**************************************************************/ 
/********************  USER PROFILE COMPONENT *****************/ 
/**************************************************************/ 

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    // Llama a la API para obtener la imagen de perfil del usuario y actualiza el estado
  }, []); 

  return (

    <div 
        className={styles.userProfile}
        >
      <div 
        className={styles.profileImageWrapper}
        >
        <span 
            className={styles.initials}
            >
                JP
        </span>
      </div>
      <div 
        className={styles.userInfo}
        >
        <span 
            className={styles.greeting}
            >
                Hola!, Juan
        </span>
      </div>
    </div>
  );
};

export default UserProfile;