import { call, put, takeEvery } from 'redux-saga/effects';

import { getBucketListApi } from "../../apis/bucketList";

function* fetchBucketList() {
    try {
        const bucketList = yield call(getBucketListApi);
        yield put({ type: 'GET_BUCKET_LIST_SUCCESS', payload: bucketList });
    } catch (e) {
        yield put({ type: 'GET_BUCKET_LIST_FAILED', message: e.message });
    }
}

function* getBucketList() {
    yield takeEvery('GET_BUCKET_LIST_REQUESTED', fetchBucketList);
}

export default getBucketList;
