import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {useRoutes} from './routes';
import {useAuth} from './hooks/auth.hook';
import {AuthContext} from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader/Preloader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    height: '500px',
  },
}));

const App = () => {
  const {token, login, logout, userId, ready} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  const classes = useStyles();

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated,
    }}>
      <BrowserRouter>
        <Container maxWidth="lg">
          <CssBaseline>
            <Navbar />
            {ready ?
              routes :
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.grid}
              >
                <Preloader />
              </Grid>
            }
            <Footer />
          </CssBaseline>
        </Container>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
