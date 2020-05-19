import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";
import {LinksPage} from "./pages/LinksPage";
import {AboutPage} from "./pages/AboutPage";
import {AccountPage} from "./pages/AccountPage";

export const useRoutes = isAuthenticated => {
  if(isAuthenticated){
    return (
      <Switch>
        <Route path="/main" exact>
          <MainPage/>
        </Route>
        <Route path="/create" exact>
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
        <Redirect to="/main"/>
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  );
};
