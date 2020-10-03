import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {withRouter, useHistory} from 'react-router-dom';
import {useHttp} from '../../hooks/http.hook';
import styles from './PostPage.module.css';
import ReactMarkdown from 'react-markdown';
import {CodeBlock} from '../../utils/markdown';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import {AuthContext} from '../../context/AuthContext';
import MarkdownBtnsPanel from '../../components/MarkdownBtnsPanel/MarkdownBtnsPanel';

const PostPage = ({match}) => {
  const [posts, setPosts] = useState([]);
  const [isEditPost, setIsEditPost] = useState(false);
  const [postContent, setPostContent] = useState('');
  const {loading, request} = useHttp();
  const history = useHistory();
  const auth = useContext(AuthContext);

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

  const editPost = (postContent) => {
    setIsEditPost(!isEditPost);
    setPostContent(postContent);
  };

  const savePost = () => {

  };

  return (
    <div className={styles.postPage}>
      <div className={styles.postsContainer}>
        <div className={styles.postsContainerTitle}>Список других постов</div>
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
                      <>
                        { isEditPost ? (
                          <button onClick={() => savePost()}>
                            Save
                          </button>
                        ) : (
                          <button onClick={() => editPost(currentPost.content)}>
                            Edit
                          </button>
                          )
                        }
                      </>
                    )
                  }
                </div>
              </>
            )}
        {
          isEditPost ? (
            <>
              <MarkdownBtnsPanel />
              <textarea
                id="postText"
                value={currentPost.content}
                onChange={(e) => setPostContent(e.target.value)}
              />
            </>
          ) : (
            <ReactMarkdown
              source={currentPost.content}
              renderers={{code: CodeBlock}}
            />
          )
        }
      </div>
    </div>
  );
};

PostPage.propTypes = {
  match: PropTypes.object,
};

export default withRouter(PostPage);
