import axios from 'axios';
import { userConstants } from '../constants/user.constants';

export const requestHelper = {
  nonAuthorized,
  authorized
};

const baseUrl = 'http://localhost:3000';

function nonAuthorized(url, method, data) {
  return axios({
    url: baseUrl + url,
    method: method,
    data: data
  });
}

function authorized(url, method, data) {
  const idToken = localStorage.getItem(userConstants.ID_TOKEN);
  return axios({
    url: baseUrl + url,
    method: method,
    data: data,
    headers: {'Authorization': idToken}
  });
}