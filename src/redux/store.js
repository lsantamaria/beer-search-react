import {applyMiddleware, createStore, compose} from 'redux';
import {createLogger} from 'redux-logger';
import reducer from './reducer';
import axios from "axios";
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create();

const enhancers = [
  applyMiddleware(
      axiosMiddleware(client, {
        returnRejectedPromiseOnError: true
      }),
      createLogger({
        collapsed: true,
      }),
  ),
];

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const enhancer = composeEnhancers(...enhancers);

export const store = createStore(reducer, {}, enhancer);
