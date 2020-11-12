import {
  call, takeLatest, put,
} from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
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
import sizeToString from '../../utils';

export function* getVideosListSaga() {
  try {

    const query = `
      query {
        getVideos {
          id name size
        }
      }
    `;

    const res = yield call(VideoService.fetchData, { query });
    yield put(getVideosRequestSuccess(res.data.getVideos));

  } catch (err) {
    console.warn(err);
  }
}

export function* saveVideoSaga(action) {
  try {

    const { size, name, type } = action.payload.file;
    const stringSize = sizeToString(size);

    const query = `
      mutation {
        saveFile(video: {id: "${uuidv4()}", name: "${name}", size: "${stringSize}", type: "${type}"})
      }
    `;

    const res = yield call(VideoService.fetchData, { query });
    yield put(saveVideosRequestSuccess(res.data.saveFile));

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
    const res = yield call(VideoService.fetchData, { query });
    yield put(searchVideosRequestSuccess(res.data.getSearchVideos));

  } catch (err) {
    console.warn(err);
  }
}

export default function* VideosSagaWatcher() {
  yield takeLatest(GET_VIDEOS_REQUEST, getVideosListSaga);
  yield takeLatest(SAVE_VIDEOS_REQUEST, saveVideoSaga);
  yield takeLatest(SEARCH_VIDEOS_REQUEST, searchVideosSaga);
}
