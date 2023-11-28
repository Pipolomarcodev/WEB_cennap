import { useState, useEffect } from 'react';
import styles from './userprofile.module.css'; 

/**************************************************************/ 
/********************  USER PROFILE COMPONENT *****************/ 
/**************************************************************/ 

const UsersProfile = () => {
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
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

export default UsersProfile;