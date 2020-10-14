import {acts} from './types';

const initialState = {
  loading: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case acts.START_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case acts.END_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    default: return state;
  }
};
