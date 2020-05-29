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
