// src/redux/reducers/httpReducer.ts

import { IProductsResponse } from '../../interfaces/IProduct';
import {
  FETCH_ALL_CALENDARS_REQUEST,
  FETCH_ALL_CALENDARS_SUCCESS,
  FETCH_ALL_CALENDARS_FAILURE,
} from '../types';

interface HttpState {
  data: IProductsResponse | null;
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
    case FETCH_ALL_CALENDARS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_ALL_CALENDARS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_ALL_CALENDARS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { httpReducer };
