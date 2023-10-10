// src/redux/reducers/httpReducer.ts

import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions/http-actions';

interface HttpState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: HttpState = {
  data: null,
  loading: false,
  error: null,
};

const httpReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default httpReducer;
