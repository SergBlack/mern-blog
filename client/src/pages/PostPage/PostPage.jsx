import React, {useCallback, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {withRouter, useHistory} from 'react-router-dom';
import {useHttp} from '../../hooks/http.hook';
import styles from './PostPage.module.css';
import ReactMarkdown from 'react-markdown';
import {CodeBlock} from '../../utils/markdown';
import {AuthContext} from '../../context/AuthContext';
import PostsAsideBar from '../../components/PostsAsideBar/PostsAsideBar';
import CircularProgress from
  '@material-ui/core/CircularProgress/CircularProgress';

const PostPage = ({match}) => {
  const [posts, setPosts] = useState([]);
  const {loading, request} = useHttp();
  const history = useHistory();
  const auth = useContext(AuthContext);

  const fetchPosts = useCallback( async () => {
    try {
      const fetchedPosts = await request('/api/post/all', 'GET', null);
      setPosts(fetchedPosts.reverse());
    } catch (e) {
      console.log(e);
    }
  }, [request]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  let currentPost = {};
  posts.forEach((post) => {
    if (post._id === match.params.id) {
      currentPost = post;
    }
  });

  const openPost = (id) => {
    history.push(`/post/${id}`);
  };

  const updatePost = (id) => {
    history.push(`/create/${id}`);
  };

  return (
    <div className={styles.postPage}>
      <PostsAsideBar posts={posts} openPost={openPost} loadingPosts={loading} />
      <div className={styles.currentPostContainer}>
        {
          loading ?
            <CircularProgress /> :
            (
              <>
                <h1 className={styles.currentPostTitle}>{currentPost.title}</h1>
                <div className={styles.currentPostData}>
                  Дата создания: {
                    new Date(currentPost.date).toLocaleDateString('ru-RU')
                  }
                  {
                    auth.isAuthenticated && (
                      <button onClick={() => updatePost(currentPost._id)}>
                        Edit
                      </button>
                    )
                  }
                </div>
              </>
            )
        }
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
