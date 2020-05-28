import * as actions from "../actions/action-types";

const initialState = {};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
