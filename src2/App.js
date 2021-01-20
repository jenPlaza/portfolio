import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//pages
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Header from './components/header';

export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/portfolio/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio/aboutme">About</Link>
            </li>
            <li>
              <Link to="/portfolio/blog">Blog</Link>
            </li>
          </ul>
        </nav> */}

        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch> */}
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
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

function Blog() {
  return <h2>Blog</h2>;
}
 */
