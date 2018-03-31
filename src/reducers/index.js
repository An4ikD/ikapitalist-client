import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { project } from './project.reducer';

const rootReducer = combineReducers({
  authentication,
  project
});

export default rootReducer;