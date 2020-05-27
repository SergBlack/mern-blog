import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import {Home} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    minHeight: '80px',
    backgroundImage: theme,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-around',
    overflowX: 'auto',
    backgroundColor: '#607d8b',
  },
  toolbarLink: {
    padding: theme.spacing(0),
    flexShrink: 0,
    backgroundColor: '#607d8b',
    color: 'black',
    fontSize: 'medium',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const auth = useContext(AuthContext);

  const getSections = () => {
    return auth.isAuthenticated ?
      [
        {title: 'Главная', url: '/main'},
        // {title: 'О JavaScript', url: '/js'},
        // {title: 'О React', url: '/react'},
        {title: 'Полезное', url: '/useful'},
        {title: 'Создать пост', url: '/create'},
        {title: 'Ссылки', url: '/links'},
        {title: 'О блоге', url: '/about'},
        {title: 'Аккаунт', url: '/account'},
      ] : [
        {title: 'Главная', url: '/main'},
        // {title: 'О JavaScript', url: '/js'},
        // {title: 'О React', url: '/react'},
        {title: 'Полезное', url: '/useful'},
        {title: 'Ссылки', url: '/links'},
        {title: 'О блоге', url: '/about'},
      ];
  };

  const logoutHandler = () => {
    auth.logout();
    history.push('/');
  };

  const loginHandler = () => {
    auth.login();
    history.push('/auth');
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        {/* <Button size="small">Подписаться</Button>*/}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          className={classes.toolbarTitle}
        >
          Блог совершеннолетнего программиста
          <code style={{fontSize: '10px', paddingLeft: '10px'}}>
            import Me from &#34;real-life&#34;;
          </code>
        </Typography>
        <IconButton>
          <Home />
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {
          auth.isAuthenticated ?
            <Button
              variant="outlined"
              size="small"
              onClick={logoutHandler}
            >
            Выйти
            </Button> :
            <Button
              variant="outlined"
              size="small"
              onClick={loginHandler}
            >
              Войти
            </Button>
        }
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {
          getSections().map((section) => (
            <NavLink
              color="inherit"
              key={section.title}
              variant="body1"
              to={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </NavLink>
          ))
        }
      </Toolbar>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default Navbar;
