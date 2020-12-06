import { combineReducers } from 'redux';

import pageReducer from './pageReduer';

const rootReducer = combineReducers({
  content: pageReducer,
});

export default rootReducer;
