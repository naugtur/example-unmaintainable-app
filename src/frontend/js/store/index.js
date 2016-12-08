import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-utils';
import { apiMiddleware } from 'redux-api-middleware';
import * as reducers from '../reducers';
import Immutable from 'immutable';

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);
const reducer = combineReducers(reducers);
const initialState = reducer(Immutable.Map({}), { type: 'CONSTRUCT' });
const Store = createStoreWithMiddleware(reducer, initialState);

export default Store;
