import React, {useCallback, useEffect, useState} from 'react';
import {useHttp} from '../hooks/http.hook';
import MainPost from '../components/MainPost';
import FeaturedPost from '../components/FeaturedPost';
import PostsList from '../components/PostsList';
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
}));

export const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const {loading, request} = useHttp();
  const classes = useStyles();

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
          </Grid> : <FeaturedPost posts={posts}/>
        }
        <Typography variant="h6" className={classes.section}>
          Ранние публикации
        </Typography>
        <Divider />
        <Grid
          container
          direction="row"
          justify="space-between"
        >
          <Grid
            item
            xs={12}
            md={8}
            container
            direction="column"
            justify="center"
            className={classes.mainGrid}
            spacing={5}
          >
            {loading || posts.length === 0 ?
              <Grid
                container
                justify="center"
                alignItems="center"
                className={classes.progressBar}
              >
                <CircularProgress/>
              </Grid> :
              <PostsList posts={posts}/>
            }
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            className={classes.mainGrid}
            spacing={5}
          >
            <Sidebar />
          </Grid>
        </Grid>
      </main>
    </>
  );
};
