import axios from 'axios';
import { requestHelper } from '../helpers/request.helpers';

export const projectService = {
  getAll
};

function getAll() {
  return requestHelper.authorized('/api/v1/projects', 'get').then(response => response.data);
}