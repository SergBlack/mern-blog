import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {GitHub, LinkedIn, Twitter} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        http://mysite.org
      </Link>
      {` ${new Date().getFullYear()}`}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(10),
    padding: theme.spacing(6, 0),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Forward-only
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Блог совершеннолетнего программиста
        </Typography>
        <Grid container justify="center">
          <IconButton>
            <LinkedIn />
          </IconButton>
          <IconButton>
            <GitHub />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
        </Grid>
        <Copyright />
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

export default Footer;
