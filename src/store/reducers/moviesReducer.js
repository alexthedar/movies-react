import * as constants from "../constants";
import { updateObject } from "../../shared/updateObject";

export const initialState = {
  moviesList: null
};

const setMovies = (state, action) =>
  updateObject(state, { moviesList: action.movies });

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_MOVIES_LIST:
      return setMovies(state, action);
    default:
      return state;
  }
};

export default movieReducer;
