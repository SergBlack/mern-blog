import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {withRouter, useHistory} from 'react-router-dom';
import {useHttp} from '../../hooks/http.hook';
import styles from './PostPage.module.css';
import ReactMarkdown from 'react-markdown';
import {CodeBlock} from '../../utils/markdown';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

const PostPage = ({match}) => {
  const [posts, setPosts] = useState([]);
  const {loading, request} = useHttp();
  const history = useHistory();

  const fetchPosts = useCallback( async () => {
    try {
      const fetchedPosts = await request('/api/post/all', 'GET', null);
      setPosts(fetchedPosts.reverse());
    } catch (e) {

    }
  }, [request]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  let currentPost = '';
  posts.forEach((post) => {
    if (post._id === match.params.id) {
      currentPost = post;
    }
  });

  const openPost = (id) => {
    history.push(`/post/${id}`);
  };

  return (
    <div className={styles.postPage}>
      <div className={styles.postsContainer}>
        <h2>Список постов</h2>
        {
          loading ?
            <CircularProgress /> :
            <>
              {
                posts.map((post) => (
                  <div
                    key={post._id}
                    className={styles.postItem}
                    onClick={() => openPost(post._id)}
                  >
                    <h3 className={styles.postItemTitle}>{post.title}</h3>
                    <div className={styles.postItemData}>
                      {new Date(post.date).toLocaleDateString('ru-RU')}
                    </div>
                  </div>
                ))
              }
            </>
        }
      </div>
      <div className={styles.currentPostContainer}>
        <h2>Открытый пост</h2>
        {
          loading ?
            <CircularProgress /> :
            (
              <>
                <h1>{currentPost.title}</h1>
                <div>
                  {new Date(currentPost.date).toLocaleDateString('ru-RU')}
                </div>
              </>
            )}
        <ReactMarkdown
          source={currentPost.content}
          renderers={{code: CodeBlock}}
        />
      </div>
    </div>
  );
};

PostPage.propTypes = {
  match: PropTypes.object,
};

export default withRouter(PostPage);
