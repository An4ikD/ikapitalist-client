import axios from 'axios';

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
    localStorage.setItem('idToken', data.auth_token);
    localStorage.setItem('kapitalistUser', data.user);
    return data;
  });
}

function logout() {
  localStorage.removeItem('idToken');
  localStorage.removeItem('kapitalistUser');
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