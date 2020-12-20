import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchPosts as fetchPostsAction} from '../../redux/actions';
import MainPost from '../../components/MainPost/MainPost';
import Preloader from '../../components/Preloader/Preloader';
import FeaturedPost from '../../components/FeaturedPosts/FeaturedPosts';
import PostsList from '../../components/PostsList/PostsList';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './MainPage.module.css';


const MainPage = ({posts, fetchPosts, loading}) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <main className={styles.mainPage}>
      {loading || posts.length === 0 ?
        <Preloader /> :
        <MainPost mainPost={posts[0]}/>
      }

      {loading || posts.length === 0 ?
        <Preloader /> :
        <div>
          <h2 className={styles.sectionTitle}>
            Недавние публикации
          </h2>
          <FeaturedPost posts={posts.slice(1, 4)}/>
        </div>
      }

      <div>
        <h2 className={styles.sectionTitle}>
          Ранние публикации
        </h2>
      </div>
      <div className={styles.postsListWrapper}>
        <div className={styles.postsListContainer}>
          {loading || posts.length === 0 ?
            <Preloader/> :
            <PostsList posts={posts.slice(4)}/>
          }
        </div>
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

MainPage.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  posts: state.postsStore.posts,
  loading: state.app.loadingPosts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPostsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
