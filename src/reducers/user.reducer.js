import { userConstants } from '../constants/user.constants';

let idToken = localStorage.getItem(userConstants.ID_TOKEN);
let current_user = JSON.parse(localStorage.getItem(userConstants.USER));

const initialState = idToken ? { loggedIn: true, user: current_user } : { loggedIn: false };

export const user = (state = initialState, action) => {
  switch(action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        idToken: action.idToken,
        user: JSON.parse(action.user)
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false
      };
    case userConstants.LOGOUT:
      return {
        loggedIn: false
      };
    case userConstants.EDIT_SUCCESS:
      return {
        ...state,
        user: JSON.parse(action.user)
      };
    case userConstants.EDIT_FAILURE:
      return state;
    default:
      return state;
  }
};