import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    height: '300px',
  },
  cardDetails: {
    flex: 5,
  },
  cardMedia: {
    width: 150,
    height: 150,
  },
}));

const random = {
  image: 'https://source.unsplash.com/random',
};

const PostsList = ({posts}) => {
  const history = useHistory();
  const classes = useStyles();

  const postsList = posts.splice(0, 3);

  const openPost = (id) => {
    history.push(`/post/${id}`);
  };

  return (
    <>
      {
        postsList.map((post) => (
          <Grid item key={post._id} component="div">
            <CardActionArea
              component="a"
              href="#"
              onClick={() => openPost(post._id)}
            >
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent component="div">
                    <Typography component="h2" variant="h5">
                      {post.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      component="div"
                    >
                      {new Date(post.date).toLocaleDateString('ru-RU')}
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                      {post.description}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      component="div"
                    >
                      Нажмите, чтобы продолжить чтение...
                    </Typography>
                    {/* <p>Прочитано: {post.reads}</p> */}
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image={random.image}
                    title={'imageTitle'}
                  />
                </Hidden>
              </Card>
            </CardActionArea>
          </Grid>
        ))
      }
    </>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array,
};

export default PostsList;
