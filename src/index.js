import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows only to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
    <NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Signup</NavLink>
    <NavLink
      to="/messages"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Messages</NavLink>
  </div>;

const Home = () => <h1>Home</h1>;

const About = () => <h1>About</h1>;

const Login = () =>
  <div>
    <h1>Login</h1>
    <form>
      <div>
        <input type="text" name="username" placeholder="Username" />
        <label htmlFor="username">Username</label>
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" />
        <label htmlFor="password">Password</label>
      </div>
      <input type="submit" value="Login" />
    </form>
  </div>;

  const Signup = () =>
    <div>
      <h1>Signup</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Signup" />
      </form>
    </div>;

    const Messages = () =>
      <div>
        <div>
          <h3>Message #1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h3>Message #2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h3>Message #3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>;

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/messages" component={Messages} />

      </div>
    </Router>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
