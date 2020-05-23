import React, {useCallback, useEffect, useState} from 'react';
import {useHttp} from '../hooks/http.hook';
import {Loader} from '../components/Loader';
import FeaturedPost from '../components/FeaturedPost';
import MainPost from '../components/MainPost';
import Sidebar from '../components/Sidebar';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent';
// import Markdown from 'markdown-to-jsx';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 5,
  },
  cardMedia: {
    width: 150,
    height: 150,
  },
}));

const mainPost = {
  title: 'Заголовок длинного недавнего поста',
  description:
    'Multiple lines of text that form the lede, ' +
    'informing new readers quickly and efficiently about what\'s ' +
    'most interesting in this post\'s contents.',
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. ' +
    'Cras mattis consectetur purus sit amet fermentum. ' +
    'Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    {title: 'September 2020', url: '#', __id: 1},
    {title: 'July 2020', url: '#', __id: 2},
    {title: 'January 2020', url: '#', __id: 3},
    {title: 'November 1999', url: '#', __id: 4},
    {title: 'October 1999', url: '#', __id: 5},
    {title: 'September 1999', url: '#', __id: 6},
    {title: 'August 1999', url: '#', __id: 7},
    {title: 'July 1999', url: '#', __id: 8},
    {title: 'June 1999', url: '#', __id: 9},
    {title: 'May 1999', url: '#', __id: 10},
    {title: 'April 1999', url: '#', __id: 11},
  ],
  social: [
    {name: 'GitHub', icon: 'GitHubIcon', __id: 1},
    {name: 'Twitter', icon: 'TwitterIcon', __id: 2},
    {name: 'Facebook', icon: 'FacebookIcon', __id: 3},
  ],
};

export const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const {loading, request} = useHttp();
  const classes = useStyles();

  const fetchPosts = useCallback( async () => {
    try {
      const fetchedPosts = await request('/api/post/all', 'GET', null);
      setPosts(fetchedPosts);
    } catch (e) {

    }
  }, [request]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <main>
        <MainPost post={mainPost}/>
        <Grid container spacing={4}>
          {
            !loading && <FeaturedPost posts={posts} />
          }
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          {/* <Main title="From the firehose" posts={posts} />*/}
          <Grid item xs={12} md={8} container spacing={4}>
            <Typography variant="h6" gutterBottom>
              Предыдущие посты
            </Typography>
            <Divider />
            {posts.map((post) => (
              <Grid item xs={12} md={12} key={post._id}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {new Date(post.date).toLocaleDateString()}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {`${post.content.substring(0, 1000)}...`}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          Продолжить чтение...
                        </Typography>
                        <p>Прочитано: {post.reads}</p>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image={mainPost.image}
                        title={'imageTitle'}
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </main>
    </>
  );
};
