import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { userAction } from '../../actions/user.actions';
import { userService } from '../../services/user.services';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
    let email = this.state.email;
    let password = this.state.password;
    this.props.login(email, password);
  }

  render() {
    const { redirectTo } = this.props.location.state || { redirectTo: '/' };
/*    if (this.props.loggedIn) {
      return <Redirect to={redirectTo} />;
    }*/

    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          <br />
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <br />
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => {
      dispatch(userAction.login(email, password));
    }
  }
}

const mapStateToProps = (state) => {
  const { authentication } = state;
  return {
    loggedIn: authentication.loggedIn
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));