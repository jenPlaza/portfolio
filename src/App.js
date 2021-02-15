import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//pages
import Home from './pages/index';
import About from './pages/about';
import Blog from './pages/blog';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';

//Material UI
import { makeStyles, Grid } from '@material-ui/core';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '2000px',
    height: 'auto',
    margin: 'auto',
    flexGrow: 1,
    overflow: 'hidden',
    border: '2px solid #f5f5f5',
  },
  recommendationsRow: {
    padding: '4% 5% 1% 5%',
    backgroundColor: '#333333',
    color: 'white',
    fontSize: '2em',
  },
  footerRow: {
    padding: '2% 5% 1% 5%',
    color: '#00d1be',
    backgroundColor: '#0A0300',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Route
                exact
                path={process.env.PUBLIC_URL + '/'}
                component={Home}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/aboutme'}
                component={About}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/blog'}
                component={Blog}
              />
              <Route exact path={process.env.PUBLIC_URL + '/resume'} />
            </Switch>
          </Grid>
        </Grid>
        {/*  <Grid item xs={12} className={classes.recommendationsRow}>
          <Recomendations />
        </Grid> */}

        <Grid item xs={12} className={classes.footerRow}>
          <Footer />
        </Grid>
      </div>
    </Router>
  );
}
