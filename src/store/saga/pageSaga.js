import { put } from 'redux-saga/effects';

import axios from '../../Utility/axios-instance';
import * as actions from '../action/rootAction';

export function* initAppSaga() {
  yield put(actions.initApp());
  try {
    const url = './Content.json';
    const response = yield axios.get(url);
    const content = {
      page1Content: response.data.page[0],
      page2Content: response.data.page[1],
    };

    yield put(actions.setStoreData(content));
  } catch (error) {
    console.log(error);
  }
}
