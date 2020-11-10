import {
  GET_VIDEOS_REQUEST_SUCCESS,
  GET_VIDEOS_REQUEST_FAILURE,
  SAVE_VIDEOS_REQUEST_SUCCESS,
  SAVE_VIDEOS_REQUEST_FAILURE,
  SEARCH_VIDEOS_REQUEST_SUCCESS,
  SEARCH_VIDEOS_REQUEST_FAILURE,
} from '../../constants/video';

const INITIAL_STATE = {
  list: [
    {
      name: 'купить слона за 150 рублей',
      duration: '3ч',
      size: '1,2GB',
    },
    {
      name: 'купить слона за 300 рублей',
      duration: '4ч',
      size: '1,8GB',
    },
    {
      name: 'купить слона за 500 рублей',
      duration: '5ч',
      size: '2GB',
    },
  ],
  error: false,
};

const video = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_VIDEOS_REQUEST_SUCCESS:
      return {
        ...state,
        list: action.payload.list,
        error: false,
      };
    case GET_VIDEOS_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case SAVE_VIDEOS_REQUEST_SUCCESS:
      return {
        ...state,
        list: action.payload.list,
        error: false,
      };
    case SAVE_VIDEOS_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case SEARCH_VIDEOS_REQUEST_SUCCESS:
      return {
        ...state,
        list: action.payload.list,
        error: false,
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
