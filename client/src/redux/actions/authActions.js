import axios from "axios";
import * as types from "./action-types";

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
