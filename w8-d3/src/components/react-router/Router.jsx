import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Profile from './Profile';
import Login from './Login';
import Home from './Home';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home  </Link>
          <Link to="/login">Login  </Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <div>
          <Switch>
            <Route path="/profile" component={Profile} />
            {/* <Route path="/profile">
              <Profile/>
            </Route> */}
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Router;
