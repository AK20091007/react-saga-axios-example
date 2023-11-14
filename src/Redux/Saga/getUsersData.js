// sagas.js
import { takeLatest, put, call } from 'redux-saga/effects';
import { getUserData } from '../../Api'
import * as actionTypes from '../Actions/actionsTypes'

function* fetchUsers(action) {
  try {
    const { nationality, results } = action.payload;
    const response = yield call(getUserData, nationality, results);
    yield put({ type: actionTypes.GET_USER_DETAILS_SUCCESS, payload: response.data.results });
  } catch (error) {
    console.log(error)
  }
}

function* getUsersData() {
  yield takeLatest(actionTypes.GET_USER_DETAILS, fetchUsers);
}

export default getUsersData;
