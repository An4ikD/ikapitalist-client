import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.services';

export const userAction = {
  login,
  logout
};

function login(email, password) {
  return dispatch => {
    dispatch(request({email}));
    userService.login(email, password)
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