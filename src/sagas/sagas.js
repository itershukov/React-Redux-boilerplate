/**
 * Created by itersh on 14.03.2018.
 */
import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

// worker Saga: will be fired on USER_REQUESTED actions
function* getUser(id) {
  try {
    yield delay(1000);
    // const user = yield call(Api.fetchUser, action.payload.userId);
    const user = { name: 'Ivan' };
    yield put({ type: 'USER_GET_SUCCESS', payload: user });
  } catch (e) {
    yield put({ type: 'USER_GET_ERROR', payload: e.message });
  }
}

function* getUsers(action) {
  try {
    yield delay(1000);
    // const user = yield call(Api.fetchUser, action.payload.userId);
    const users = [{ name: 'Ivan' }];
    yield put({ type: 'USERS_GET_SUCCESS', payload: { list: users } });
  } catch (e) {
    yield put({ type: 'USERS_GET_ERROR', payload: e.message });
  }
}
//
// /*
//   Starts fetchUser on each dispatched `USER_REQUESTED` action.
//   Allows concurrent fetches of user.
// */
function* userSaga() {
  yield takeEvery('USER_GET_START', getUser);
}
function* usersSaga() {
  yield takeEvery('USERS_GET_START', getUsers);
}
//
// /*
//   Alternatively you may use takeLatest.
//
//   Does not allow concurrent fetches of user. If "USER_REQUESTED" gets
//   dispatched while a fetch is already pending, that pending fetch is cancelled
//   and only the latest one will be run.
// */
// function* userSaga() {
//   yield takeLatest("USER_REQUESTED", fetchUser);
// }

export default function* rootSaga() {
  yield all([userSaga(), usersSaga()]);
}
