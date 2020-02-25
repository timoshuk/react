import React, { Fragment } from 'react';
import './index.css';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

export default function App() {
  const name = 'John Doe';
  return (
    <Router>
      <main>
        <h1>Guarding routes: https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={`/about/${name}`}>About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/:name" component={About} />
          <Route path="/contact" component={Contact} />
          <Route render={() => { return <h1>404: page not found</h1> }} />
        </Switch>
      </main>
    </Router>
  );
}

// HomePage
const Home = () => {
  return (<Fragment>
    <h1>Home</h1>
    <FakeText />
  </Fragment>
  )
}

// AboutPage
const About = ({ match: { params: { name } } }) => {
  return (<Fragment>
    {name !== 'John Doe' ? <Redirect to="/" /> : null}
    <h1>About {name}</h1>
    <FakeText />
  </Fragment>)
}
// ContactPage
const Contact = ({ history }) => {
  return (<Fragment>
    <h1>Contact</h1>
    <button onClick={() => { history.push('/') }}>Go to home</button>
    <FakeText />
  </Fragment>)
}

const FakeText = () => {
  return (
    <p>This HTML file is a template.
    If you open it directly in the browser, you will see an empty page.</p>
  )
}