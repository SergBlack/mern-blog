import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton/IconButton';
import Copyright from '../Copyright/Copyright';
import styles from './Footer.module.css';

const Footer = () => {
  const socialLinksSprite = require('../assets/socialLinksSprite.svg');

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>Forward-only</div>
      <p className={styles.description}>
        Блог совершеннолетнего программиста
      </p>
      <div className={styles.socialLinks}>
        <IconButton
          href="https://vk.com/id2329393"
          xlinkHref={`${socialLinksSprite}#icon-vk`}
        />
        <IconButton
          href="https://github.com/SergBlack"
          xlinkHref={`${socialLinksSprite}#icon-github`}
        />
        <IconButton
          href="https://linkedin.com/in/sergey-osipchuk"
          xlinkHref={`${socialLinksSprite}#icon-linkedin`}
        />
      </div>
      <Copyright
        href=""
        date={` ${new Date().getFullYear()}`}
      />
    </footer>
  );
};

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

export default Footer;
