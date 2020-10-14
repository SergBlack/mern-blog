import {acts} from './types';

const initialState = {
  posts: [],
  currentPost: {},
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case acts.FETCH_POSTS: {
      return {
        ...state,
        posts: action.payload.reverse(),
      };
    }
    case acts.FETCH_POST: {
      return {
        ...state,
        currentPost: action.payload,
      };
    }
    default: return state;
  }
};
