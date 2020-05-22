import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  const loginHandler = (event) => {
    event.preventDefault();
    auth.login();
    history.push('/auth');
  };

  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-1">
        <span className="brand-logo">БЛОГ</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/main">Главная</NavLink></li>
          {
            auth.isAuthenticated &&
            <li>
              <NavLink to="/create">Создать пост</NavLink>
            </li>
          }
          <li><NavLink to="/links">Ссылки</NavLink></li>
          <li><NavLink to="/about">О блоге</NavLink></li>
          {
            auth.isAuthenticated &&
            <li>
              <NavLink to="/account">Аккаунт</NavLink>
            </li>
          }
          { auth.isAuthenticated ?
            <li><a href="/" onClick={logoutHandler}>Выйти</a></li> :
            <li><a href="/" onClick={loginHandler}>Войти</a></li>
          }
        </ul>
      </div>
    </nav>
  );
};
