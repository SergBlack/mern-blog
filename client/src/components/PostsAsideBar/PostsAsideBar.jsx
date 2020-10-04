import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostsAsideBar.module.css';
import PostsAsideBarItem from '../PostsAsideBarItem/PostsAsideBarItem';
import CircularProgress from '@material-ui/core/CircularProgress';

const PostsAsideBar = ({posts, openPost, loading}) => {
  return (
    <div className={styles.postsContainer}>
      <div className={styles.postsContainerTitle}>Список других постов</div>
      {
        loading ?
          <CircularProgress /> : (
            <>
              {
                posts.map((post) => (
                  <PostsAsideBarItem
                    post={post}
                    key={post._id}
                    openPost={openPost}
                  />
                ))
              }
            </>
          )
      }
    </div>
  );
};

PostsAsideBar.propTypes = {
  posts: PropTypes.array,
  openPost: PropTypes.func,
  loading: PropTypes.bool,
};

export default PostsAsideBar;
