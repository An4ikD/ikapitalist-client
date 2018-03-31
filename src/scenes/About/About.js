import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const About = (props) => {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { authentication } = state;
  return {
    user: authentication.user
  };
};

export default withRouter(connect(mapStateToProps)(About));