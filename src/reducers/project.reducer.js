import { userConstants } from '../constants/user.constants';
import { projectConstants } from '../constants/project.constants';

const initialState = { projects: [] };

export const project = (state = initialState, action) => {
  switch(action.type) {
    case projectConstants.GET_ALL_SUCCESS:
      return {
        ...state,
        projects: action.projects
      }
    case projectConstants: GET_ALL_FAILURE:
      return {
        ...state,
        projects: []
      }
    default:
      return state;
  }
};