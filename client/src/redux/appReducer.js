import {acts} from './types';

const initialState = {
  loadingPosts: false,
  loadingPost: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case acts.START_LOADING_POSTS: {
      return {
        ...state,
        loadingPosts: true,
      };
    }
    case acts.END_LOADING_POSTS: {
      return {
        ...state,
        loadingPosts: false,
      };
    }
    case acts.START_LOADING_POST: {
      return {
        ...state,
        loadingPost: true,
      };
    }
    case acts.END_LOADING_POST: {
      return {
        ...state,
        loadingPost: false,
      };
    }
    default: return state;
  }
};
