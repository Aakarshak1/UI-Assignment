import * as actionTypes from '../action/actionTypes';

const initialState = {
  page1Content: null,
  page2Content: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_APP:
      return {
        ...state,
      };
    case actionTypes.SET_STORE_DATA:
      return {
        ...state,
        page1Content: action.payload.page1Content,
        page2Content: action.payload.page2Content,
      };
    case actionTypes.FETCH_DATA_FROM_STORE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
