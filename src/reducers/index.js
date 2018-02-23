import { combineReducers } from 'redux';
import ResearchersReducer from './researcher_reducer';

const rootReducer = combineReducers({
  researchers: ResearchersReducer,
});

export default rootReducer;