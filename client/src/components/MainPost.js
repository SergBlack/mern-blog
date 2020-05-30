import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  mainPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

// const post = {
//   title: 'Заголовок длинного недавнего поста',
//   content:
//     '*Тут* **будет** ~~распологаться~~ самый последний пост по дате' +
//     '*Тут* **будет** ~~распологаться~~ самый последний пост по дате' +
//     '*Тут* **будет** ~~распологаться~~ самый последний пост по дате' +
//     '*Тут* **будет** ~~распологаться~~ самый последний пост по дате' +
//     '*Тут* **будет** ~~распологаться~~ самый последний пост по дате' +
//     '*Тут* **будет** ~~распологаться~~ самый последний пост по дате' +
//     '*Тут* **будет** ~~распологаться~~ самый последний пост по дате' +
//     '*Тут* **будет** ~~распологаться~~ самый последний пост по дате',
//   image: 'https://source.unsplash.com/random',
//   imgText: 'main image description',
//   linkText: 'Continue reading…',
// };

const MainPost = ({posts}) => {
  const classes = useStyles();
  const mainPost = posts[0];

  return (
    <Paper
      className={classes.mainPost}
      style={{backgroundImage: `url(${mainPost.image})`}}
    >
      {
        <img
          style={{display: 'none'}}
          src={mainPost.image}
          alt={mainPost.imageText}
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {mainPost.title}
            </Typography>
            <Typography variant="h5" color="inherit" >
              <ReactMarkdown>
                {mainPost.content}
              </ReactMarkdown>
            </Typography>
            <Link variant="subtitle1" href="#">
              <Button variant="contained" color="primary">
                Открыть...
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

MainPost.propTypes = {
  posts: PropTypes.array,
};

export default MainPost;
