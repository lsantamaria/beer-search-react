import { combineReducers } from 'redux';
import appState from "./AppState";

//here we could add more reducers
const appReducer = combineReducers({
  appState
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
};

export default rootReducer;
