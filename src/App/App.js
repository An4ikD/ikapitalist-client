import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from '../scenes/Home/Home';
import Login from '../scenes/Login/Login';
import Register from '../scenes/Register/Register';
import About from '../scenes/About/About';
import Investor from '../scenes/Investor/Investor';

const App = (props) => {
  return (
    <div>
      <Navbar />
      {props.user &&
        <div>Hello, {props.user.username}</div>
      }
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        <Route path="/aminvestor" component={Investor} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { authentication } = state;
  return {
    user: authentication.user,
  };
};

export default withRouter(connect(mapStateToProps)(App));
