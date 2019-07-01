import * as constants from "../constants";
import { updateObject } from "../../shared/updateObject";

export const initialState = {
  marketTops: [],
  movies: []
};

const setMarketTops = (state, action) =>
  updateObject(state, { marketTops: action.marketTops });
  
const setMovies = (state, action) =>
  updateObject(state, { movies: action.movies });

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_MARKET_TOP:
      return setMarketTops(state, action);
    case constants.SET_MOVIES:
      return setMovies(state, action);
    default:
      return state;
  }
};

export default movieReducer;
