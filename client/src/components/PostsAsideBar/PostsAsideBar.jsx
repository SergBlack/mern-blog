import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './PostsAsideBar.module.css';
import PostsAsideBarItem from '../PostsAsideBarItem/PostsAsideBarItem';
import Preloader from '../Preloader/Preloader';

const PostsAsideBar = ({posts, openPost, loading}) => {
  return (
    <div className={styles.postsContainer}>
      <div className={styles.postsContainerTitle}>Список других постов</div>
      {loading ?
        <Preloader /> : (
          <>
            {posts.map((post) => (
              <PostsAsideBarItem
                post={post}
                key={post._id}
                openPost={openPost}
              />
            ))}
          </>
        )}
    </div>
  );
};

PostsAsideBar.propTypes = {
  posts: PropTypes.array,
  openPost: PropTypes.func,
  loading: PropTypes.bool,
};

const mapDispatchToProps = (state) => ({
  loading: state.app.loading,
});

export default connect(mapDispatchToProps)(PostsAsideBar);
