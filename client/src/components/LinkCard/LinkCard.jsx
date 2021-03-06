import React from 'react';
import PropTypes from 'prop-types';

const LinkCard = ({link}) => {
  return (
    <>
      <h2>Ссылка</h2>

      <p>Ваша ссылка:
        <a
          href={link.to}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.to}
        </a>
      </p>
      <p>Откуда:
        <a href={link.from}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.from}
        </a>
      </p>
      <p>Количество кликов по ссылке: <strong>{link.clicks}</strong></p>
      <p>Дата создания:
        <strong>
          {new Date(link.date).toLocaleDateString('ru-RU')}
        </strong></p>
    </>
  );
};

LinkCard.propTypes = {
  link: PropTypes.object,
};

export default LinkCard;
