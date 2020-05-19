import React, {useContext} from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const  logoutHandler = event => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-1">
        <span className="brand-logo">БЛОГ</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/main">Главная</NavLink></li>
          <li><NavLink to="/create">Создать пост</NavLink></li>
          <li><NavLink to="/links">Ссылки</NavLink></li>
          <li><NavLink to="/about">О блоге</NavLink></li>
          <li><NavLink to="/account">Аккаунт</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        </ul>
      </div>
    </nav>
  );
};
