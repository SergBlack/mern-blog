import {acts} from './types';
import axios from 'axios';

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({type: acts.START_LOADING});
    try {
      const response = await axios.get('/api/post/all');
      dispatch({type: acts.FETCH_POSTS, payload: response.data});
      dispatch({type: acts.END_LOADING});
    } catch (e) {
      console.log(e);
      dispatch({type: acts.END_LOADING});
    }
  };
};

export const fetchPost = (id) => {
  return async (dispatch) => {
    dispatch({type: acts.START_LOADING});
    try {
      const response = await axios.get(`/api/post/${id}`);
      dispatch({type: acts.FETCH_POST, payload: response.data});
      dispatch({type: acts.END_LOADING});
    } catch (e) {
      console.log(e);
      dispatch({type: acts.END_LOADING});
    }
  };
};
