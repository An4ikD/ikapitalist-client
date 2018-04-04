import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>
          <Link to={'/aminvestor'}>Я Инвестор</Link>
        </h2>
        <h2>
          <Link to={'/ambusinessman'}>Я Бизнесмен</Link>
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { authentication } = state;
  return {
    user: authentication.user
  };
};

export default withRouter(connect(mapStateToProps)(Home));