import { combineReducers } from 'redux';
import appState from "./AppState";

const appReducer = combineReducers({
  appState
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
};

export default rootReducer;
