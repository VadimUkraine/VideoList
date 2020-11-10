import { all } from 'redux-saga/effects';
import VideosSagaWatcher from './video';

export default function* rootSaga() {
  yield all([VideosSagaWatcher()]);
}
