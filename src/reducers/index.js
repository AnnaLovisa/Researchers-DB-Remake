import { combineReducers } from 'redux';
import ResearchersReducer from './reducer_researchers';

const rootReducer = combineReducers({
  researchers: ResearchersReducer
});

export default rootReducer;