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
      const {post} = action.payload;
      return {
        ...state,
        posts: [post, ...state.posts],
        currentPost: post,
      };
    }
    case acts.DELETE_POST: {
      const {id} = action.payload;
      const filteredPost = state.posts.filter((post) => post._id !== id);
      return {
        ...state,
        posts: filteredPost,
        currentPost: filteredPost[0],
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
