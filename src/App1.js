import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//pages
import Home from './pages/index';
import About from './pages/about';
import Header from './components/Header/header';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <nav>
          <ul>
            <li>
              <a href="/portfolio/">Home</a>
            </li>
            <li>
              <a href="/portfolio/aboutme">About</a>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'}>
            <Home />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/aboutme'}>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

/* function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
 */
