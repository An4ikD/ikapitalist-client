import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter, Link } from 'react-router-dom';
import { userAction } from '../../actions/user.actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    this.props.login(username, password);
  }

  render() {
    const { redirectTo } = this.props.location.state || { redirectTo: '/' };
    if (this.props.loggedIn) {
      return <Redirect to={redirectTo} />;
    }

    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <br />
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <br />
          <button type="submit">Войти</button>
        </form>
        <div>
          <h2>
            <Link to={{pathname: "/register", state: { redirectTo: redirectTo }}}>Register</Link>
          </h2>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      dispatch(userAction.login(username, password));
    }
  }
};

const mapStateToProps = (state) => {
  const { authentication } = state;
  return {
    loggedIn: authentication.loggedIn
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));