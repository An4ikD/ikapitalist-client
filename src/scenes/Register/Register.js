import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userService } from '../../services/user.services';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleClick(e) {
    let email = this.state.email;
    let password = this.state.password;
    let password_confirmation = this.state.passwordConfirmation;
    userService.register(email, password, password_confirmation);
  }

  render() {
    return (
      <div>
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        <br />
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        <br />
        <input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation}
               onChange={this.handleChange} />
        <br />
        <button type="button" onClick={this.handleClick}>Войти</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(null)(Register);