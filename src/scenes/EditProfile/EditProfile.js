import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { userAction } from '../../actions/user.actions';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.user ? this.props.user.email : ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      id: this.props.user.id,
      email: this.state.email
    };
    this.props.edit(user);
  }

  render() {
    if (!this.props.loggedIn) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { redirectTo: "/edit" }
          }}
        />
      );
    }

    return (
      <div>
        <h2>Обновить профиль</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" name="email" onChange={this.handleChange} value={this.state.email} />
          <button type="submit">Сохранить</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user: user.user,
    loggedIn: user.loggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (user) => {
      dispatch(userAction.edit(user));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfile));