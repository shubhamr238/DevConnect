import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer/index";

const initialState = {};

const middlewares = applyMiddleware(thunkMiddleware);

const store = createStore(
  rootReducer,
  initialState,
  compose(
    middlewares,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
