import moviesReducer, { initialState } from "../moviesReducer";
import * as actions from "../../actions/index";

describe("search reducer", () => {
  let action;
  let actualResult;
  let expectedResult;

  it("should return the initial state", () => {
    expect(moviesReducer(undefined, {})).toEqual({
      moviesList: null
    });
  });

  it("should react to SET_MOVIES_LIST action", () => {
    action = actions.setMoviesList(["test"]);
    actualResult = moviesReducer(initialState, action);
    expectedResult = {
      ...initialState,
      moviesList: ["test"]
    };
    expect(actualResult).toEqual(expectedResult);
  });
});
