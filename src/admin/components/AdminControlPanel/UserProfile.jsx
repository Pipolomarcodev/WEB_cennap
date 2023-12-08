import React, { useState, useEffect } from 'react';
import styles from './userprofile.module.css'; 
import { useAuth } from '../../../context/AuthContext';

/**************************************************************/ 
/********************  USER PROFILE COMPONENT *****************/ 
/**************************************************************/ 

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState('');
  const { user } = useAuth();
  
  
  return (

    <div 
        className={styles.userProfile}
        >
         <div className="circle-cont">
              <div className="circle">
                <span>{user.name ? user.name[0].toUpperCase() : ""}</span>
                <span>{user.last_name ? user.last_name[0].toUpperCase() : ""}</span>
              </div>
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