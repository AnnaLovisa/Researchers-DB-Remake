import { combineReducers } from 'redux';
import ResearchersReducer from './reducer_researchers';
import AnotherResearchersReducer from './reducer_fetch';

const rootReducer = combineReducers({
  researchers: ResearchersReducer,
  fetchResearchers: AnotherResearchersReducer
});

export default rootReducer;