import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchPosts as fetchPostsAction} from '../redux/actions';
import MainPost from '../components/MainPost';
import FeaturedPost from '../components/FeaturedPost';
import PostsList from '../components/PostsList/PostsList';
import Sidebar from '../components/Sidebar';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(1),
  },
  progressBar: {
    height: '200px',
  },
  section: {
    marginTop: '24px',
    marginBottom: '16px',
  },
  postsListContainer: {
    display: 'flex',
    paddingTop: '20px',
  },
  postsListWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '72%',
    margin: '-8px -8px',
  },
  sidebarWrapper: {
    display: 'flex',
    marginLeft: '30px',
    width: '28%',
  },
  postsList: {
    display: 'flex',
  },
}));

const MainPage = ({posts, fetchPosts, loading}) => {
  const classes = useStyles();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      <main>
        {loading || posts.length === 0 ?
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.progressBar}
            >
              <CircularProgress />
            </Grid> : <MainPost mainPost={posts && posts[0]}/>
        }
        <Typography variant="h6" className={classes.section}>
          Недавние публикации
        </Typography>
        <Divider />
        {loading || posts.length === 0 ?
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.progressBar}
          >
            <CircularProgress />
          </Grid> : <FeaturedPost posts={posts.slice(1, 4)}/>
        }
        <Typography variant="h6" className={classes.section}>
          Ранние публикации
        </Typography>
        <Divider />
        <div className={classes.postsListContainer}>
          <div className={classes.postsListWrapper}>
            {loading || posts.length === 0 ?
              <div>
                <CircularProgress/>
              </div> :
              <PostsList
                posts={posts.slice(4)}
                className={classes.postsList}
              />
            }
          </div>
          <div className={classes.sidebarWrapper}>
            <Sidebar />
          </div>
        </div>
      </main>
    </>
  );
};

MainPage.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  posts: state.postsStore.posts,
  loading: state.app.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPostsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
