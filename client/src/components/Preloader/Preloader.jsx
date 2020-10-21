import React from 'react';
import styles from './Preloader.module.css';
import preloader from '../assets/preloader.svg';

const Preloader = () => {
  return (
    <div className={styles.preloaderContainer}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
