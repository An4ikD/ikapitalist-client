import { userConstants } from '../constants/user.constants';

let idToken = localStorage.getItem('idToken');
let user = JSON.parse(localStorage.getItem('kapitalistUser'));

const initialState = idToken ? { loggedIn: true, user } : {};

export const authentication = (state = initialState, action) => {
  switch(action.type) {
    case(userConstants.LOGIN_REQUEST):
      return {
        loggingIn: true
      };
    case(userConstants.LOGIN_SUCCESS):
      return {
        loggedIn: true,
        idToken: action.idToken,
        user: JSON.parse(action.user)
      };
    case(userConstants.LOGIN_FAILURE):
      return {
        loggedIn: false
      };
    case(userConstants.LOGOUT):
      return {
        loggedIn: false
      };
    default:
      return state;
  }
};