import React from 'react';
import PropTypes from 'prop-types';
import styles from './Copyright.module.css';

const Copyright = ({href, date}) => {
  return (
    <div className={styles.copyright}>
      {'Copyright © '}
      <a href={`${href}`}>
        http://mysite.org
      </a>
      {date}
    </div>
  );
};

Copyright.propTypes = {
  href: PropTypes.string,
  date: PropTypes.string,
};

export default Copyright;

