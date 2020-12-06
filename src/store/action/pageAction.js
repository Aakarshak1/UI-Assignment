import * as actionTypes from './actionTypes';

export const initApp = () => {
  return {
    type: actionTypes.INIT_APP,
  };
};

export const setStoreData = (payload) => {
  return {
    type: actionTypes.SET_STORE_DATA,
    payload,
  };
};

export const fetchStoreData = () => {
  return {
    type: actionTypes.FETCH_DATA_FROM_STORE,
  };
};
