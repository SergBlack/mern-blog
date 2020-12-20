import React from 'react';
import {object, shape, string} from 'prop-types';
import {useHistory} from 'react-router-dom';
import arrayBufferToBase64 from '../../utils/arrayBufferToBase64';
import styles from './MainPost.module.css';

const MainPost = ({mainPost: {_id, description, image, title}}) => {
  const history = useHistory();

  const openPost = (e, id) => {
    e.preventDefault();
    history.push(`/post/${id}`);
  };

  return (
    <div
      className={styles.mainPost}
      /* eslint-disable-next-line max-len */
      style={{backgroundImage: `url(data:image/jpeg;base64,${arrayBufferToBase64(image?.data?.data)})`}}
    >
      <div className={styles.mainPostContent}>
        <h1 className={styles.mainPostTitle}>
          {title}
        </h1>
        <h2 className={styles.mainPostDescription}>
          {description}
        </h2>
        <button
          className={styles.mainPostBtn}
          onClick={(e) => openPost(e, _id)}
        >
          Открыть...
        </button>
      </div>
    </div>
  );
};

MainPost.propTypes = {
  mainPost: shape({
    _id: string.isRequired,
    description: string.isRequired,
    image: object,
    title: string.isRequired,
  }),
};

MainPost.defaultProps = {
  image: null,
};

export default MainPost;
