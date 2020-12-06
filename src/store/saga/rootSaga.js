import { fork } from 'redux-saga/effects';

import * as actionTypes from '../action/actionTypes';

import { initAppSaga } from './pageSaga';

export function* watchPageSaga() {
  yield fork(initAppSaga);
}
