import { call, put, takeEvery } from 'redux-saga/effects'

function* fetchComment() {
    // try {
    //     const user = yield call(Api.fetchComment)
    //     yield put({ type: 'COMMENT_FETCH_SUCCEEDED', user: user })
    // } catch (e) {
    //     yield put({ type: 'COMMENT_FETCH_FAILED', message: e.message })
    // }
}

function* commentSaga() {
    yield takeEvery('COMMENT_FETCH_REQUESTED', fetchComment)
}

export default commentSaga