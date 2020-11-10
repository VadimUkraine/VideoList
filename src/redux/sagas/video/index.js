import {
  call, takeLatest,
} from 'redux-saga/effects';
import {
  GET_VIDEOS_REQUEST,
  SAVE_VIDEOS_REQUEST,
  SEARCH_VIDEOS_REQUEST,
} from '../../constants/video';

export function* getVideosListSaga() {
  try {

    yield call(console.log('GET VIDEOS FROM SERVER ---'));

  } catch (err) {
    console.warn(err);
  }
}

export function* saveVideoSaga() {
  try {

    yield call(console.log('SAVE VIDEO ---'));

  } catch (err) {
    console.warn(err);
  }
}

export function* searchVideosSaga() {
  try {

    yield call(console.log('GET VIDEOS FROM SERVER ---'));

  } catch (err) {
    console.warn(err);
  }
}

export default function* VideosSagaWatcher() {
  yield takeLatest(GET_VIDEOS_REQUEST, getVideosListSaga);
  yield takeLatest(SAVE_VIDEOS_REQUEST, saveVideoSaga);
  yield takeLatest(SEARCH_VIDEOS_REQUEST, searchVideosSaga);
}
