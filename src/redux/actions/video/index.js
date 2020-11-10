import {
  GET_VIDEOS_REQUEST,
  GET_VIDEOS_REQUEST_SUCCESS,
  GET_VIDEOS_REQUEST_FAILURE,
  SAVE_VIDEOS_REQUEST,
  SAVE_VIDEOS_REQUEST_SUCCESS,
  SAVE_VIDEOS_REQUEST_FAILURE,
  SEARCH_VIDEOS_REQUEST,
  SEARCH_VIDEOS_REQUEST_SUCCESS,
  SEARCH_VIDEOS_REQUEST_FAILURE,
} from '../../constants/video';

export const getVideosRequest = () => ({ type: GET_VIDEOS_REQUEST });

export const getVideosRequestSuccess = (videos) => ({
  type: GET_VIDEOS_REQUEST_SUCCESS,
  payload: { videos },
});

export const getVideosRequestFailure = () => ({ type: GET_VIDEOS_REQUEST_FAILURE });

export const saveVideosRequest = (video) => ({
  type: SAVE_VIDEOS_REQUEST,
  payload: { video },
});

export const saveVideosRequestSuccess = () => ({ type: SAVE_VIDEOS_REQUEST_SUCCESS });

export const saveVideosRequestFailure = () => ({ SAVE_VIDEOS_REQUEST_FAILURE });

export const searchVideosRequest = (text) => ({
  type: SEARCH_VIDEOS_REQUEST,
  payload: { text },
});

export const searchVideosRequestSuccess = (videos) => ({
  type: SEARCH_VIDEOS_REQUEST_SUCCESS,
  payload: { videos },
});

export const searchVideosRequestFailure = () => ({ SEARCH_VIDEOS_REQUEST_FAILURE });
