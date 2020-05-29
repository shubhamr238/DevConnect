import * as types from "../actions/action-types";

import isEmpty from "../../validation/is_empty";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload), //check if payload is empty or not
        user: action.payload,
      };
    default:
      return state;
  }
}
