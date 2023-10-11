// src/redux/reducers/httpReducer.ts

import { IProductsResponse } from '../../interfaces/IProduct';
import {
  FETCH_ALL_CALENDARS_REQUEST,
  FETCH_ALL_CALENDARS_SUCCESS,
  FETCH_ALL_CALENDARS_FAILURE,
  FETCH_CAMPAIGN_MATRIX_REQUEST,
  FETCH_CAMPAIGN_MATRIX_SUCCESS,
  FETCH_CAMPAIGN_MATRIX_FAILURE,
  FETCH_DETAILED_TABLE_REQUEST,
  FETCH_DETAILED_TABLE_SUCCESS,
  FETCH_DETAILED_TABLE_FAILURE,
} from '../types';

interface HttpState {
  data: IProductsResponse | null;
  loading: boolean;
  error: string | null;
}
const INITIAL_HTTP_STATE: HttpState = {
  data: null,
  loading: false,
  error: null,
};
interface IState {
  products: HttpState;
  campaignMatrix: HttpState;
  detailedTable: HttpState;
}

const initialState: IState = {
  products: INITIAL_HTTP_STATE,
  campaignMatrix: INITIAL_HTTP_STATE,
  detailedTable: INITIAL_HTTP_STATE,
};

const updateStateKey = (
  state: any,
  { key, updatedProperties }: { key: string; updatedProperties: any }
) => {
  return {
    ...state,
    [key]: {
      ...state[key],
      ...updatedProperties,
    },
  };
};

const httpReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_ALL_CALENDARS_REQUEST:
      return updateStateKey(state, {
        key: 'products',
        updatedProperties: { loading: true, error: null },
      });
    case FETCH_ALL_CALENDARS_SUCCESS:
      return updateStateKey(state, {
        key: 'products',
        updatedProperties: { loading: false, data: action.payload },
      });
    case FETCH_ALL_CALENDARS_FAILURE:
      return updateStateKey(state, {
        key: 'products',
        updatedProperties: { loading: false, error: action.payload },
      });

    case FETCH_CAMPAIGN_MATRIX_REQUEST:
      return updateStateKey(state, {
        key: 'campaignMatrix',
        updatedProperties: { loading: true, error: null },
      });
    case FETCH_CAMPAIGN_MATRIX_SUCCESS:
      return updateStateKey(state, {
        key: 'campaignMatrix',
        updatedProperties: { loading: false, data: action.payload },
      });
    case FETCH_CAMPAIGN_MATRIX_FAILURE:
      return updateStateKey(state, {
        key: 'campaignMatrix',
        updatedProperties: { loading: false, error: action.payload },
      });

    case FETCH_DETAILED_TABLE_REQUEST:
      return updateStateKey(state, {
        key: 'detailedTable',
        updatedProperties: { loading: true, error: null },
      });
    case FETCH_DETAILED_TABLE_SUCCESS:
      return updateStateKey(state, {
        key: 'detailedTable',
        updatedProperties: { loading: false, data: action.payload },
      });
    case FETCH_DETAILED_TABLE_FAILURE:
      return updateStateKey(state, {
        key: 'detailedTable',
        updatedProperties: { loading: false, error: action.payload },
      });

    default:
      return state;
  }
};

export { httpReducer };
