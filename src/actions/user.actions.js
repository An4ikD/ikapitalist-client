import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.services';

export const userAction = {
  login,
  logout,
  edit
};

function login(username, password) {
  return dispatch => {
    dispatch(request({username}));
    userService.login(username, password)
      .then(data => {
        dispatch(success(data.user, data.auth_token));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  }

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user, idToken) { return { type: userConstants.LOGIN_SUCCESS, user: user, idToken: idToken } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error} }
}

function logout() {
  userService.logout();
  return {
    type: userConstants.LOGOUT
  };
}

function edit(user) {
  return dispatch => {
    userService.edit(user)
      .then(data => {
        console.log(data);
        dispatch(success(data.user));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  }

  function success(user) { return { type: userConstants.EDIT_SUCCESS, user: user } }
  function failure(error) { return { type: userConstants.EDIT_FAILURE, error } }
}