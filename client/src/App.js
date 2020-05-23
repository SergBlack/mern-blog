import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {useRoutes} from './routes';
import {useAuth} from './hooks/auth.hook';
import {AuthContext} from './context/AuthContext';
import {Navbar} from './components/Navbar';
import {Loader} from './components/Loader';
import Footer from './components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
// import Blog from './templates/Blog';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const App = () => {
  const {token, login, logout, userId, ready} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  const classes = useStyles();

  if (!ready) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated,
    }}>
      <BrowserRouter>
        <Container maxWidth="lg">
          <CssBaseline>
            <Navbar />
            {routes}
            {/* <Blog/>*/}
            <Footer />
          </CssBaseline>
        </Container>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
