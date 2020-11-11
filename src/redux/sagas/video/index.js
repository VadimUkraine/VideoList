import {
  call, takeLatest, put,
} from 'redux-saga/effects';
import {
  GET_VIDEOS_REQUEST,
  SAVE_VIDEOS_REQUEST,
  SEARCH_VIDEOS_REQUEST,
} from '../../constants/video';
import {
  getVideosRequestSuccess,
  saveVideosRequestSuccess,
  searchVideosRequestSuccess,
  saveVideosRequestFailure,
} from '../../actions/video';
import VideoService from '../../../global/api/service';

export function* getVideosListSaga() {
  try {

    const query = `
      query {
        getVideos {
          id name size
        }
      }
    `;

    const list = yield call(VideoService.fetchData, { query });
    yield put(getVideosRequestSuccess(list.data.getVideos));

  } catch (err) {
    console.warn(err);
  }
}

export function* saveVideoSaga() {
  try {

    const query = `
      mutation {
        saveVideo(video: {id: "123", name: "testVideo", size: "1.25GB"})
      }
    `;

    const list = yield call(VideoService.fetchData, { query });
    yield put(saveVideosRequestSuccess(list.data.saveVideo));

  } catch (err) {
    console.warn(err);
    yield put(saveVideosRequestFailure());
  }
}

export function* searchVideosSaga(action) {
  try {

    const query = `
      query {
        getSearchVideos(search: {text: "${action.payload.text}"}) {
          id name size
        }
      }
    `;
    const list = yield call(VideoService.fetchData, { query });
    yield put(searchVideosRequestSuccess(list.data.getSearchVideos));

  } catch (err) {
    console.warn(err);
  }
}

export default function* VideosSagaWatcher() {
  yield takeLatest(GET_VIDEOS_REQUEST, getVideosListSaga);
  yield takeLatest(SAVE_VIDEOS_REQUEST, saveVideoSaga);
  yield takeLatest(SEARCH_VIDEOS_REQUEST, searchVideosSaga);
}
