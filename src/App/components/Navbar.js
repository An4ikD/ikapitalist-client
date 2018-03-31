import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userAction } from '../../actions/user.actions';

const Navbar = (props) => {
  const logout = () => {
    props.logout();
  }

  return (
    <div>
      <Link to="/">Инвестиции</Link>
      <Link to="/events">События</Link>
      <Link to="/services">Сервисы</Link>
      <Link to="/portfolio">Портфель</Link>
      <Link to="/blog">Блог</Link>
      <Link to="/about">О нас</Link>
      <Link to="/jobs">Работа</Link>
      <Link to="/contacts">Контакты</Link>
      {props.loggedIn &&
        <button onClick={logout}>Выйти</button>
      }
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(userAction.logout());
    }
  };
};

const mapStateToProps = (state) => {
  const { authentication } = state;
  return {
    loggedIn: authentication.loggedIn
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));