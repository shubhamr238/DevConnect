import * as actions from "../actions/action-types";

const initialState = {
  isAuthenticated: false,
  user: {},
};

function authReducer(state = initialState, action) {
  return state;
}

export default authReducer;
