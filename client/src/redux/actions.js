import {acts} from './types';
import axios from 'axios';

const getConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({type: acts.START_LOADING_POSTS});
    return axios.get('/api/post/all')
        .then((response) => {
          dispatch({type: acts.FETCH_POSTS, payload: response.data});
          dispatch({type: acts.END_LOADING_POSTS});
        })
        .catch((err) => {
          console.log(err);
          dispatch({type: acts.END_LOADING_POSTS});
        });
  };
};

export const fetchPost = (id) => {
  return (dispatch) => {
    dispatch({type: acts.START_LOADING_POST});
    return axios.get(`/api/post/${id}`)
        .then((response) => {
          dispatch({type: acts.FETCH_POST, payload: response.data});
          dispatch({type: acts.END_LOADING_POST});
        })
        .catch((err) => {
          console.log(err);
          dispatch({type: acts.END_LOADING_POST});
        });
  };
};

export const addPost = (token, post, afterSuccess) => {
  return (dispatch) => {
    dispatch({type: acts.START_LOADING_POST});
    return axios.post(
        '/api/post/new',
        post,
        getConfig(token),
    )
        .then((response) => {
          dispatch({type: acts.ADD_POST, payload: response.data});
          afterSuccess(response.data.post._id);
          dispatch({type: acts.END_LOADING_POST});
        })
        .catch((err) => {
          console.log(err);
          dispatch({type: acts.END_LOADING_POST});
        });
  };
};

export const updatePost = (token, id, post, afterSuccess) => {
  return (dispatch) => {
    dispatch({type: acts.START_LOADING_POST});
    return axios.put(
        `/api/post/update/${id}`,
        post,
        getConfig(token),
    )
        .then((response) => {
          dispatch({type: acts.UPDATE_POST, payload: response.data});
          afterSuccess(response.data.post._id);
          dispatch({type: acts.END_LOADING_POST});
        })
        .catch((err) => {
          console.log(err);
          dispatch({type: acts.END_LOADING_POST});
        });
  };
};

export const deletePost = (token, id) => {
  return (dispatch) => {
    dispatch({type: acts.START_LOADING_POST});
    return axios.delete(
        `/api/post/${id}`,
        getConfig(token),
    )
        .then((response) => {
          dispatch({type: acts.DELETE_POST, payload: response.data});
          dispatch({type: acts.END_LOADING_POST});
        })
        .catch((err) => {
          console.log(err);
          dispatch({type: acts.END_LOADING_POST});
        });
  };
};
