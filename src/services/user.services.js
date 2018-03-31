import axios from 'axios';
import { userConstants } from '../constants/user.constants';

export const userService = {
  login,
  register,
  logout
};

function login(email, password) {
  return axios.post('http://localhost:3000/api/v1/authenticate', {
    email: email,
    password: password
  })
  .then(response => response.data)
  .then(data => {
    localStorage.setItem(userConstants.ID_TOKEN, data.auth_token);
    localStorage.setItem(userConstants.USER, data.user);
    return data;
  });
}

function logout() {
  localStorage.removeItem(userConstants.ID_TOKEN);
  localStorage.removeItem(userConstants.USER);
}

function register(email, password, password_confirmation) {
  axios({
    method: 'POST',
    url: 'http://localhost:3000/api/v1/register',
    data: {
      user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }  
    }
  })
  .then(response => {
    console.log(response);
    return response;
  })
  .catch(error => {
    console.log(error);
  })
}