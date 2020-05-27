import React from 'react';
import PropTypes from 'prop-types';
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
  const classes = useStyles();

  return (
    <>
      {posts.map((post) => (
        <Grid item key={post._id}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {new Date(post.date).toLocaleDateString('ru-RU')}
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
                  image={random.image}
                  title={'imageTitle'}
                />
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array,
};

export default PostsList;
