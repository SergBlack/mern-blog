import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import styles from './PostsList.module.css';

const PostsList = ({posts}) => {
  const history = useHistory();

  // const postsList = posts.splice(0, 3);
  const postsList = posts;

  const openPost = (id) => {
    history.push(`/post/${id}`);
  };

  return (
    <>
      {
        postsList.map((post) => (
          <div
            key={post._id}
            className={styles.postCard}
          >
            <a
              className={styles.cardActionArea}
              href=""
              onClick={() => openPost(post._id)}
            >
              <div className={styles.card}>
                <div className={styles.cardTitle}>
                  {post.title}
                </div>
                <div className={styles.cardData}>
                  {new Date(post.date).toLocaleDateString('ru-RU')}
                </div>
                <div className={styles.cardMedia}
                  // style={{backgroundImage: `url(${post.image})`}}
                >
                  <img className={styles.cardImage} src={post.image}/>
                </div>
                <p className={styles.cardDescription}>
                  {post.description}
                </p>
              </div>
            </a>
          </div>
        ))
      }
    </>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array,
};

export default PostsList;
