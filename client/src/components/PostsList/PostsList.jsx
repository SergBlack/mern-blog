import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import styles from './PostsList.module.css';
import PostCard from '../PostCard/PostCard';

const PostsList = ({posts}) => {
  const history = useHistory();

  const openPost = (e, id) => {
    e.preventDefault();
    history.push(`/post/${id}`);
  };

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostCard
          key={post._id}
          id={post._id}
          title={post.title}
          date={post.date}
          image={post.image?.data?.data}
          description={post.description}
          onClick={openPost}
          type="small"
        />
      ))}
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array,
};

export default PostsList;
