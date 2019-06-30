import * as constants from "../constants";
import { updateObject } from "../../shared/updateObject";

export const initialState = {
  error: '',
  isFetching: false,
};

const setError = (state, action) =>
  updateObject(state, { error: action.error });

const setLoading = (state, action) =>
  updateObject(state, { isFetching: action.isFetching });

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_ERROR:
      return setError(state, action);
    case constants.SET_LOADING:
      return setLoading(state, action);
    default:
      return state;
  }
};

export default appReducer;
