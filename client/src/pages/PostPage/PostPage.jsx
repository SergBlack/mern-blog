import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {useHttp} from '../../hooks/http.hook';
import styles from './PostPage.module.css';
import ReactMarkdown from 'react-markdown';
import {CodeBlock} from '../../utils/markdown';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

const PostPage = ({match}) => {
  const [posts, setPosts] = useState([]);
  const {loading, request} = useHttp();

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

  return (
    <div className={styles.postPage}>
      <div className={styles.postsContainer}>
        {
          loading ?
            <CircularProgress /> :
            <>
              {
                posts.map((post) => (
                  <div key={post.__id}>
                    <h3>{post.title}</h3>
                    <div>{new Date(post.date).toLocaleDateString('ru-RU')}</div>
                  </div>
                ))
              }
            </>
        }
      </div>
      <div className={styles.currentPostContainer}>
        {
          loading ?
            <CircularProgress /> :
            (
              <>
                <div>
                  {new Date(currentPost.date).toLocaleDateString('ru-RU')}
                </div>
                <h1>{currentPost.title}</h1>
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
