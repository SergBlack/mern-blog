import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import styles from './FeaturedPosts.module.css';
import PostCard from '../PostCard/PostCard';

const FeaturedPosts = ({posts}) => {
  const history = useHistory();

  const openPost = (e, id) => {
    e.preventDefault();
    history.push(`/post/${id}`);
  };

  return (
    <div className={styles.container}>
      {posts && posts.map((post) => (
        <PostCard
          key={post._id}
          id={post._id}
          title={post.title}
          date={post.date}
          image={post.image}
          description={post.description}
          onClick={openPost}
          type="large"
        />
      ))}
    </div>
  );
};

FeaturedPosts.propTypes = {
  posts: PropTypes.array,
};

export default FeaturedPosts;
