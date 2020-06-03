import axios from "axios";
import * as types from "./action-types";

//Add Post
export const addPost = (postData) => (dispatch) => {
  axios
    .post("/api/v1/posts", postData)
    .then((res) => {
      dispatch({
        type: types.ADD_POST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Get Posts
export const getPosts = () => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get("/api/v1/posts")
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: types.GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: types.GET_POSTS,
        payload: null,
      })
    );
};

// Get Post
export const getPost = (id) => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get(`/api/v1/posts/${id}`)
    .then((res) =>
      dispatch({
        type: types.GET_POST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: types.GET_POST,
        payload: null,
      })
    );
};

// Delete Post
export const deletePost = (id) => (dispatch) => {
  axios
    .delete(`/api/v1/posts/${id}`)
    .then((res) =>
      dispatch({
        type: types.DELETE_POST,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Add Like
export const addLike = (id) => (dispatch) => {
  axios
    .post(`/api/v1/posts/like/${id}`)
    .then((res) => dispatch(getPosts()))
    .catch((err) =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Remove Like
export const removeLike = (id) => (dispatch) => {
  axios
    .post(`/api/v1/posts/unlike/${id}`)
    .then((res) => dispatch(getPosts()))
    .catch((err) =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Add Comment
export const addComment = (postId, commentData) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post(`/api/v1/posts/comment/${postId}`, commentData)
    .then((res) =>
      dispatch({
        type: types.GET_POST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Delete Comment
export const deleteComment = (postId, commentId) => (dispatch) => {
  axios
    .delete(`/api/v1/posts/comment/${postId}/${commentId}`)
    .then((res) =>
      dispatch({
        type: types.GET_POST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set loading state
export const setPostLoading = () => {
  return {
    type: types.POST_LOADING,
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: types.CLEAR_ERRORS,
  };
};
