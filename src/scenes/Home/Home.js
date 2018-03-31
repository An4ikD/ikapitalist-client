import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
  return (
    <div>
      <h2>
        <Link to={{
          pathname: '/login',
          state: { redirectTo: '/aminvestor' }
        }}>Я Инвестор</Link>
      </h2>
      <h2>
        <Link to={{
          pathname: '/login',
          state: { redirectTo: '/ambusinessman'}
        }}>Я Бизнесмен</Link>
      </h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { authentication } = state;
  return {
    user: authentication.user
  };
};

export default withRouter(connect(mapStateToProps)(Home));