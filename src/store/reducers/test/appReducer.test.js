import { expect } from "chai";
import appReducer, { initialState } from "../appReducer";
import * as actions from "../../actions/index";

describe("search reducer", () => {
  let action;
  let actualResult;
  let expectedResult;

  it("should return the initial state", () => {
    expect(appReducer(undefined, {})).to.deep.equal({
      error: "",
      isFetching: false
    });
  });

  it("should react to SET_ERROR action", () => {
    action = actions.setError("error");
    actualResult = appReducer(initialState, action);
    expectedResult = {
      ...initialState,
      error: "error"
    };
    expect(actualResult).to.deep.equal(expectedResult);
  });

  it("should react to SET_LOADING action", () => {
    action = actions.setLoading(true);
    actualResult = appReducer(initialState, action);
    expectedResult = {
      ...initialState,
      isFetching: true
    };
    expect(actualResult).to.deep.equal(expectedResult);
  });
});
