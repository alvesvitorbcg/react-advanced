// src/redux/actions/httpActions.ts

import { Dispatch } from 'redux';
import axios from 'axios';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    try {
      const response = await axios.get(
        'http://localhost:5002/api/v1/reference-calendars',
        {
          headers: {
            Authorization: `Bearer {token}`,
          },
        }
      );
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
    } catch (error: any) {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
    }
  };
};
