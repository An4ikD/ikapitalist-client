import { projectConstants } from '../constants/project.constants';
import { projectService } from '../services/project.services';

export const projectAction = {
  getAll
};

function getAll() {
  return dispatch => {
    projectService.getAll()
      .then(data => {
        console.log(data);
        dispatch(success(data));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  }

  function success(projects) { return { type: projectConstants.GET_ALL_SUCCESS, projects } }
  function failure(error) { return { type: projectConstants.GET_ALL_FAILURE } }
}
