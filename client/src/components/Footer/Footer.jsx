import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SocialLinkButton from '../SocialIcon/SocialLinkButton';
import styles from './Footer.module.css';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        http://mysite.org
      </Link>
      {` ${new Date().getFullYear()}`}
    </Typography>
  );
};

const Footer = () => {
  const socialLinksSprite = require('../assets/socialLinksSprite.svg');

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>Forward-only</div>
      <p className={styles.description}>
        Блог совершеннолетнего программиста
      </p>
      <div className={styles.socialLinks}>
        <SocialLinkButton
          href="https://vk.com/id2329393"
          xlinkHref={`${socialLinksSprite}#icon-vk`}
        />
        <SocialLinkButton
          href="https://github.com/SergBlack"
          xlinkHref={`${socialLinksSprite}#icon-github`}
        />
        <SocialLinkButton
          href="https://linkedin.com/in/sergey-osipchuk"
          xlinkHref={`${socialLinksSprite}#icon-linkedin`}
        />
      </div>
      <Copyright />
    </footer>
  );
};

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

export default Footer;
