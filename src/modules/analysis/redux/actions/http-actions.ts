// src/redux/actions/httpActions.ts

import axios from 'axios';
import { Dispatch } from 'redux';
import {
  API_BASE_URL,
  HEADERS as headers,
} from '../../../core/components/consts/backend';
import {
  FETCH_ALL_CALENDARS_FAILURE,
  FETCH_ALL_CALENDARS_REQUEST,
  FETCH_ALL_CALENDARS_SUCCESS,
} from '../types';

export const fetchData = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_ALL_CALENDARS_REQUEST });

    try {
      const response = await axios.get(`${API_BASE_URL}/products`, {
        headers,
      });
      dispatch({ type: FETCH_ALL_CALENDARS_SUCCESS, payload: response.data });
    } catch (error: any) {
      dispatch({ type: FETCH_ALL_CALENDARS_FAILURE, payload: error.message });
    }
  };
};
