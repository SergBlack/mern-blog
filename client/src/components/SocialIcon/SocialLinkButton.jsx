import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './SocialLinkButton.module.css';

const SocialLinkButton = ({href, onClick, xlinkHref, color}) => (
  <a
    href={href}
    onClick={onClick}
    className={cx(
        styles.socialLink,
        {
          [styles.socialLinkBlue]: color === 'blue',
        },
    )}
  >
    <svg>
      <use xlinkHref={xlinkHref} />
    </svg>
  </a>
);


SocialLinkButton.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  xlinkHref: PropTypes.string,
  color: PropTypes.string,
};

export default SocialLinkButton;
