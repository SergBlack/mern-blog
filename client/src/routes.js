import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import MainPage from './pages/MainPage';
import {CreatePage} from './pages/CreatePage/CreatePage';
import {DetailPage} from './pages/DetailPage';
import {AuthPage} from './pages/AuthPage';
import {LinksPage} from './pages/LinksPage';
import {AboutPage} from './pages/AboutPage';
import {AccountPage} from './pages/AccountPage';
import PostPage from './pages/PostPage/PostPage';

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <MainPage/>
        </Route>
        <Route path="/create">
          <CreatePage/>
        </Route>
        <Route path="/detail/:id" exact>
          <DetailPage/>
        </Route>
        <Route path="/links" exact>
          <LinksPage/>
        </Route>
        <Route path="/about" exact>
          <AboutPage/>
        </Route>
        <Route path="/account" exact>
          <AccountPage/>
        </Route>
        <Route path="/post/:id" exact>
          <PostPage/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/auth" exact>
        <AuthPage/>
      </Route>
      {/* <Redirect to="/"/>*/}
      <Route path="/" exact>
        <MainPage/>
      </Route>
      <Route path="/links" exact>
        <LinksPage/>
      </Route>
      <Route path="/about" exact>
        <AboutPage/>
      </Route>
      <Route path="/post/:id" exact>
        <PostPage/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  );
};
