import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

//pages
import Home from '../pages/index';
import About from '../pages/about';

//styles
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '3%',
  },
}));

//exporting class Routes
export default function Routes() {
  const classes = useStyles();
  //console.log(process.env.PUBLIC_URL);
  return (
    <Router>
      {/* <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
        <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
      </Switch>
    </Router> */}
      <div>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/about'}>
            <About />
          </Route>
          <Route path={process.env.PUBLIC_URL + '/'}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
