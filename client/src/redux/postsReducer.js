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
    case acts.ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, action.payload],
        currentPost: action.payload.post,
      };
    }
    case acts.DELETE_POST: {
      return {
        ...state,
      };
    }
    case acts.UPDATE_POST: {
      return {
        ...state,
      };
    }
    default: return state;
  }
};
