import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useHistory, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  fetchPost as fetchPostAction,
  fetchPosts as fetchPostsAction,
  deletePost as deletePostAction,
} from '../../redux/actions';
import styles from './PostPage.module.css';
import ReactMarkdown from 'react-markdown';
import {CodeBlock} from '../../utils/markdown';
import {AuthContext} from '../../context/AuthContext';
import PostsAsideBar from '../../components/PostsAsideBar/PostsAsideBar';
import Preloader from '../../components/Preloader/Preloader';

const PostPage = ({
  fetchPost,
  fetchPosts,
  deletePost,
  posts,
  currentPost,
  loading,
}) => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const {token} = auth;
  const {id} = useParams();

  useEffect(() => {
    if (!posts.length) {

      console.log('fetchPosts()')
      fetchPosts();
    }
    if (currentPost._id !== id) {
      console.log('fetchPost()')
      fetchPost(id);
    }
    console.log('posts.length', posts.length)
    console.log('currentPost._id', currentPost._id)
    console.log('id', id)
  }, []);

  useEffect(() => {
    history.push(`/post/${currentPost._id}`);
  }, [currentPost, history]);

  const openPost = (e, id) => {
    e.preventDefault();
    history.push(`/post/${id}`);
    fetchPost(id);
  };

  const updatePost = (id) => {
    history.push(`/post/update/${id}`);
  };

  const removePost = (id) => {
    if (window.confirm('Удалить пост?')) {
      deletePost(token, id);
    }
  };

  return (
    <div className={styles.postPage}>
      <PostsAsideBar posts={posts} openPost={openPost} />
      <div className={styles.currentPostContainer}>
        {
          loading ?
            <Preloader /> :
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
                        <button onClick={() => updatePost(currentPost._id)}>
                          Edit
                        </button>
                        <button
                          onClick={() => removePost(currentPost._id)}
                        >
                          Delete
                        </button>
                      </>
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
  fetchPost: PropTypes.func,
  fetchPosts: PropTypes.func,
  deletePost: PropTypes.func,
  posts: PropTypes.array,
  currentPost: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  posts: state.postsStore.posts,
  currentPost: state.postsStore.currentPost,
  loading: state.app.loadingPost,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (id) => dispatch(fetchPostAction(id)),
  fetchPosts: () => dispatch(fetchPostsAction()),
  deletePost: (token, id) => dispatch(deletePostAction(token, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
