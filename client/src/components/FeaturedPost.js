import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(1),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
}));

const FeaturedPost = ({posts}) => {
  const classes = useStyles();
  const postImg = 'https://source.unsplash.com/random';
  const imageTitle = 'image text';

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      className={classes.mainGrid}
      spacing={4}
    >
      {posts.map((post, i) => {
        return (
          i < 2 ?
            <Grid item xs={12} md={6} key={post._id}>
              <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {new Date(post.date).toLocaleDateString('ru-RU')}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {`${post.content.substring(0, 120)}...`}
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
                      image={postImg}
                      title={imageTitle}
                    />
                  </Hidden>
                </Card>
              </CardActionArea>
            </Grid> :
            null
        );
      })}
    </Grid>
  );
};

FeaturedPost.propTypes = {
  posts: PropTypes.array,
};

export default FeaturedPost;
