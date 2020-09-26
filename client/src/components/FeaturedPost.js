import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
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
    height: '250px',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  cardDescription: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0px',
    height: '80px',
  },
}));

const FeaturedPost = ({posts}) => {
  const history = useHistory();
  const classes = useStyles();

  const imageTitle = 'image text';
  const featuredPosts = [posts[1], posts[2]];
  const openPost = (id) => {
    history.push(`/post/${id}`);
  }

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      className={classes.mainGrid}
      spacing={4}
      component="div"
    >
      {
        featuredPosts && featuredPosts.map((post) => {
          return (
            <Grid item xs={12} md={6} key={post._id} component="div">
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
                      <Typography
                        variant="subtitle1"
                        className={classes.cardDescription}
                      >
                        {post.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Нажмите, чтобы продолжить чтение...
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image={post.image}
                      title={imageTitle}
                    />
                  </Hidden>
                </Card>
              </CardActionArea>
            </Grid>
          );
        })
      }
    </Grid>
  );
};

FeaturedPost.propTypes = {
  posts: PropTypes.array,
};

export default FeaturedPost;
