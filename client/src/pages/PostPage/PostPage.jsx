import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useHistory, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  fetchPost as fetchPostAction,
  fetchPosts as fetchPostsAction,
} from '../../redux/actions';
import styles from './PostPage.module.css';
import ReactMarkdown from 'react-markdown';
import {CodeBlock} from '../../utils/markdown';
import {AuthContext} from '../../context/AuthContext';
import PostsAsideBar from '../../components/PostsAsideBar/PostsAsideBar';
import CircularProgress from
  '@material-ui/core/CircularProgress/CircularProgress';

const PostPage = ({fetchPost, fetchPosts, posts, currentPost, loading}) => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const {id} = useParams();

  useEffect(() => {
    if (!posts.length) {
      fetchPosts();
    }
    fetchPost(id);
  }, []);

  const openPost = (e, id) => {
    e.preventDefault();
    history.push(`/post/${id}`);
    fetchPost(id);
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
  fetchPost: PropTypes.func,
  fetchPosts: PropTypes.func,
  posts: PropTypes.array,
  currentPost: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  posts: state.postsStore.posts,
  currentPost: state.postsStore.currentPost,
  loading: state.app.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (id) => dispatch(fetchPostAction(id)),
  fetchPosts: () => dispatch(fetchPostsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
