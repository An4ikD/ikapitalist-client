import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { userService } from '../../services/user.services';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      registrationSuccess: false
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
    let password_confirmation = this.state.passwordConfirmation;
    userService.register(username, password, password_confirmation)
      .then(data => {
        this.setState({registrationSuccess: true});
      });
  }

  render() {
    console.log(this.props.location.state);
    if (this.state.registrationSuccess) {
      const { redirectTo } = this.props.location.state || { redirectTo: '/' };
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { redirectTo: redirectTo }
          }}
        />
      );
    }
    return (
      <div>
        <h3>Register</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <br />
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <br />
          <input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation}
                 onChange={this.handleChange} />
          <br />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default withRouter(connect(null)(Register));