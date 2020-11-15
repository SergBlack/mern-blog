import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './IconButton.module.css';

const IconButton = ({
  href,
  onClick,
  xlinkHref,
  color,
  description,
  width,
  height,
}) => (
  <a
    href={href}
    onClick={onClick}
    className={cx(
        styles.link,
        {[styles.linkBlue]: color === 'blue'},
    )}
  >
    <span className={styles.svgContainer}>
      <svg style={{width, height}}>
        <use xlinkHref={xlinkHref} />
      </svg>
    </span>
    {description && (
      <span className={styles.description}>{description}</span>
    )}
  </a>
);

IconButton.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  xlinkHref: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

IconButton.defaultProps = {
  width: '28px',
  height: '28px',
};

export default IconButton;
