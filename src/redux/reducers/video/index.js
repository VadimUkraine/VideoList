import {
  GET_VIDEOS_REQUEST_SUCCESS,
  GET_VIDEOS_REQUEST_FAILURE,
  SAVE_VIDEOS_REQUEST_SUCCESS,
  SAVE_VIDEOS_REQUEST_FAILURE,
  SEARCH_VIDEOS_REQUEST_SUCCESS,
  SEARCH_VIDEOS_REQUEST_FAILURE,
  SET_FILE_SAVED,
} from '../../constants/video';

const INITIAL_STATE = {
  list: [],
  error: null,
  isFileSaved: false,
};

const video = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILE_SAVED:
      return {
        ...state,
        isFileSaved: false,
      };
    case GET_VIDEOS_REQUEST_SUCCESS:
      return {
        ...state,
        list: action.payload.videos,
        error: null,
      };
    case GET_VIDEOS_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case SAVE_VIDEOS_REQUEST_SUCCESS:
      return {
        ...state,
        isFileSaved: true,
        error: null,
      };
    case SAVE_VIDEOS_REQUEST_FAILURE:
      return {
        ...state,
        error: { upload: true },
      };
    case SEARCH_VIDEOS_REQUEST_SUCCESS:
      return {
        ...state,
        list: action.payload.videos,
        error: null,
      };
    case SEARCH_VIDEOS_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default video;
