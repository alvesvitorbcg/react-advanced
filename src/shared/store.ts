// src/redux/store.ts

import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { httpReducer as analysisReducer } from '../modules/analysis/redux/reducers/http-reducer';
import { httpReducer as calendarReducer } from '../modules/calendar/redux/reducers/http-reducer';

const rootReducer = combineReducers({
  analysis: analysisReducer,
  calendar: calendarReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
