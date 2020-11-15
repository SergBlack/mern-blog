import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import IconButton from '../IconButton/IconButton';
import styles from './Navbar.module.css';


const Navbar = () => {
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

  const iconSprite = require('../assets/navbarIcons.svg');

  const logoutHandler = () => {
    auth.logout();
    history.push('/');
  };

  const loginHandler = () => {
    auth.login();
    history.push('/auth');
  };

  const onHomeBtnClick = () => {
    history.push('/');
  };

  return (
    <>
      <div className={styles.toolbar}>
        <h2 className={styles.toolbarTitle}>
          Блог совершеннолетнего программиста
          <code className={styles.toolbarCode}>
            import Me from &#34;real-life&#34;;
          </code>
        </h2>
        <IconButton
          onClick={onHomeBtnClick}
          xlinkHref={`${iconSprite}#home`}
          width="24px"
          height="24px"
        />
        <IconButton
          xlinkHref={`${iconSprite}#search`}
          width="24px"
          height="24px"
        />
        {auth.isAuthenticated ?
          <button onClick={logoutHandler}>ВЫЙТИ</button> :
          <button onClick={loginHandler}>ВОЙТИ</button>
        }
      </div>

      <nav className={styles.navBar}>
        {getSections().map((section) => (
          <NavLink
            key={section.title}
            to={section.url}
            className={styles.navBarItem}
          >
            {section.title}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

Navbar.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default Navbar;
