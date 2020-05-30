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
