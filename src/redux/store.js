import {applyMiddleware, createStore, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';
import axios, {AxiosPromise} from "axios";
import axiosMiddleware from 'redux-axios-middleware';
import {urls} from "../common/constants";
import storage from 'redux-persist/lib/storage';

const client = axios.create({
  baseURL: urls.SEARCH_URL,
});

const enhancer =
  applyMiddleware(
      thunkMiddleware,
      axiosMiddleware(client, {
        returnRejectedPromiseOnError: true
      })
  );

// const composeEnhancers =
//     (__DEV__ &&
//         typeof window !== 'undefined' &&
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//     compose;
//
// const enhancer = composeEnhancers(...enhancers);

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);
