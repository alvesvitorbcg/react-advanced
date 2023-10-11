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
  FETCH_CAMPAIGN_MATRIX_REQUEST,
  FETCH_CAMPAIGN_MATRIX_SUCCESS,
  FETCH_CAMPAIGN_MATRIX_FAILURE,
  FETCH_DETAILED_TABLE_REQUEST,
  FETCH_DETAILED_TABLE_SUCCESS,
  FETCH_DETAILED_TABLE_FAILURE,
} from '../types';

export const fetchProductsData = () => {
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

export const fetchCampaignMatrixData = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_CAMPAIGN_MATRIX_REQUEST });

    try {
      const response = await axios.get(`${API_BASE_URL}/campaign-matrix`, {
        headers,
      });
      dispatch({ type: FETCH_CAMPAIGN_MATRIX_SUCCESS, payload: response.data });
    } catch (error: any) {
      dispatch({ type: FETCH_CAMPAIGN_MATRIX_FAILURE, payload: error.message });
    }
  };
};

export const fetchDetailedTableData = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_DETAILED_TABLE_REQUEST });

    try {
      const response = await axios.get(`${API_BASE_URL}/detailed-table`, {
        headers,
      });
      dispatch({ type: FETCH_DETAILED_TABLE_SUCCESS, payload: response.data });
    } catch (error: any) {
      dispatch({ type: FETCH_DETAILED_TABLE_FAILURE, payload: error.message });
    }
  };
};
