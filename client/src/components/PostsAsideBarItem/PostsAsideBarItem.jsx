import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostsAsideBarItem.module.css';

const PostsAsideBarItem = ({post, openPost}) => {
  return (
    <div
      className={styles.postItem}
      onClick={() => openPost(post._id)}
    >
      <h3 className={styles.postItemTitle}>{post.title}</h3>
      <div className={styles.postItemData}>
        {new Date(post.date).toLocaleDateString('ru-RU')}
      </div>
    </div>
  );
};

PostsAsideBarItem.propTypes = {
  post: PropTypes.object,
  openPost: PropTypes.func,
};


export default PostsAsideBarItem;
