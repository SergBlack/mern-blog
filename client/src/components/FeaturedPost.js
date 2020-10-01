import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(1),
  },
  cardActionArea: {
    width: '100%',
    height: '450px',
  },
  card: {
    width: '100%',
    height: '100%',
  },
  cardMedia: {
    paddingTop: '55%',
  },
}));

const FeaturedPost = ({posts}) => {
  const history = useHistory();
  const classes = useStyles();

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
        posts && posts.map((post) => {
          return (
            <Grid item xs={12} md={4} key={post._id} component="div">
              <CardActionArea
                className={classes.cardActionArea}
                component="a"
                href=""
                onClick={() => openPost(post._id)}
              >
                <Card className={classes.card}>
                  <CardHeader
                    title={post.title}
                    subheader={new Date(post.date).toLocaleDateString('ru-RU')}
                  />
                  <CardMedia
                    className={classes.cardMedia}
                    image={post.image}
                    title="Image title"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {post.description}
                    </Typography>
                  </CardContent>
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
