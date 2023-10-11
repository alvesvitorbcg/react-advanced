import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import httpReducer from './reducers/http-reducer';

const rootReducer = combineReducers({
  http: httpReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
