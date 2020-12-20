import { put, delay } from 'redux-saga/effects';
import * as actions from '../actions/index';

export function* logoutSaga(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expirationDate');
  yield localStorage.removeItem('userId');
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeSaga(action) {
  yield delay(action.expirationTime);
  yield put(actions.logout());
}
