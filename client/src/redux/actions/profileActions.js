import axios from "axios";

import * as types from "./action-types";

//GET CURRENT PROFILE
export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get("/api/v1/profile")
    .then((res) =>
      dispatch({
        type: types.GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: types.GET_PROFILE,
        payload: {},
      })
    );
};

// Create Profile
export const createProfile = (profileData, history) => (dispatch) => {
  axios
    .post("/api/v1/profile", profileData)
    .then((res) => history.push("/dashboard"))
    .catch((err) =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Add experience
export const addExperience = (expData, history) => (dispatch) => {
  axios
    .post("/api/v1/profile/experience", expData)
    .then((res) => history.push("/dashboard"))
    .catch((err) =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Add education
export const addEducation = (eduData, history) => (dispatch) => {
  axios
    .post("/api/v1/profile/education", eduData)
    .then((res) => history.push("/dashboard"))
    .catch((err) =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Delete Experience
export const deleteExperience = (id) => (dispatch) => {
  axios
    .delete(`/api/v1/profile/experience/${id}`)
    .then((res) =>
      dispatch({
        type: types.GET_PROFILE,
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

// Delete Education
export const deleteEducation = (id) => (dispatch) => {
  axios
    .delete(`/api/v1/profile/education/${id}`)
    .then((res) =>
      dispatch({
        type: types.GET_PROFILE,
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

// Delete account & profile
export const deleteAccount = () => (dispatch) => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    axios
      .delete("/api/v1/profile")
      .then((res) =>
        dispatch({
          type: types.SET_CURRENT_USER,
          payload: {},
        })
      )
      .catch((err) =>
        dispatch({
          type: types.GET_ERRORS,
          payload: err.response.data,
        })
      );
  }
};

//Profile Loading
export const setProfileLoading = () => {
  return {
    type: types.PROFILE_LOADING,
  };
};

//Clear Profile
export const clearCurrentProfile = () => {
  return {
    type: types.CLEAR_CURRENT_PROFILE,
  };
};
