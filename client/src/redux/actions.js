import {acts} from './types';
import axios from 'axios';

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({type: acts.START_LOADING});
    return axios.get('/api/post/all')
        .then((response) => {
          dispatch({type: acts.FETCH_POSTS, payload: response.data});
        })
        .then(dispatch({type: acts.END_LOADING}))
        .catch((err) => {
          console.log(err);
          dispatch({type: acts.END_LOADING});
        });
  };
};

export const fetchPost = (id) => {
  return (dispatch) => {
    dispatch({type: acts.START_LOADING});
    return axios.get(`/api/post/${id}`)
        .then((response) => {
          dispatch({type: acts.FETCH_POST, payload: response.data});
        })
        .then(dispatch({type: acts.END_LOADING}))
        .catch((err) => {
          console.log(err);
          dispatch({type: acts.END_LOADING});
        });
  };
};

export const addPost = (auth, post, afterSuccess) => {
  const config = {
    headers: {Authorization: `Bearer ${auth.token}`},
  };

  return async (dispatch) => {
    dispatch({type: acts.START_LOADING});
    return axios.post(
        '/api/post/new',
        post,
        config,
    )
        .then((response) => {
          dispatch({type: acts.ADD_POST, payload: response.data});
          afterSuccess(response.data.post._id);
        })
        .then(() => {
          dispatch({type: acts.END_LOADING});
        })
        .catch((err) => {
          console.log(err);
          dispatch({type: acts.END_LOADING});
        });
  };
};

// export const updatePost = async (id) => {
//   try {
//     const data = await request(
//       `/api/post/${id}/update`,
//       'PUT',
//       {
//         content: postContent,
//         id,
//       },
//       {Authorization: `Bearer ${auth.token}`},
//     );
//     setIsEditPost(false);
//     setPostContent(data.content);
//     history.push(`/post/${data._id}`);
//   } catch (e) {
//     console.log(e);
//   }
// };
//
// export const deletePost = async (id) => {
//   try {
//
//   } catch (e) {
//     console.log(e);
//   }
// };
