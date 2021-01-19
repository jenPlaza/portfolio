import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//pages
import Home from './pages/index';
import About from './pages/about';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/portfolio/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/portfolio/about">
            <About />
          </Route>
          <Route exact path="/portfolio/">
            <Home />
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
