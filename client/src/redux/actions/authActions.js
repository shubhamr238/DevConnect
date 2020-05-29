import axios from "axios";
import jwt_decode from "jwt-decode";

import setAuthToken from "../../utils/setAuthToken";
import * as types from "./action-types";

//Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/v1/users/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Login User
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("api/v1/users/login", userData)
    .then((res) => {
      //save to local storage
      const { token } = res.data;
      //set token to localstorage
      localStorage.setItem("jwtToken", token);
      //set token to auth header
      setAuthToken(token);
      //decode token to get user data
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//set logged in user(create session)
export const setCurrentUser = (decoded) => {
  return {
    type: types.SET_CURRENT_USER,
    payload: decoded,
  };
};

//log out user
export const logoutUser = () => (dispatch) => {
  //remove token from localstorage
  localStorage.removeItem("jwtToken");
  //remove the auth header
  setAuthToken(false);
  // set current user to empty obj{},
  //which will then set isAuthenticated to flase
  dispatch(setCurrentUser({}));
};
