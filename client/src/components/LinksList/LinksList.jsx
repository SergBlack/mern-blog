import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import styles from './LinksList.module.css';

const LinksList = ({links}) => {
  if (!links.length) {
    return (
      <div className={styles.links_container}>
        <p className="center">Ссылок пока нет</p>
      </div>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Оригинал</th>
          <th>Сокращенная</th>
          <th>Открыть</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, i) => (
          <tr key={link._id}>
            <td>{i + 1}</td>
            <td>{link.from}</td>
            <td>{link.to}</td>
            <td>
              <Link to={`/detail/${link._id}`}>Открыть</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

LinksList.propTypes = {
  links: PropTypes.array,
};

export default LinksList;
