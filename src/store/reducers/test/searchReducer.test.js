import { expect } from "chai";
import searchReducer, { initialState } from "../searchReducer";
import * as actions from "../../actions/index";

describe("search reducer", () => {
  let action;
  let actualResult;
  let expectedResult;

  it("should return the initial state", () => {
    expect(searchReducer(undefined, {})).to.deep.equal({
      refSymbolTypeAhead: []
    });
  });

  it("should react to SET_REF_SYMBOLS", () => {
    action = actions.setRefSymbols(["test"]);
    actualResult = searchReducer(initialState, action);
    expectedResult = {
      ...initialState,
      refSymbolTypeAhead: ["test"]
    };
    expect(actualResult).to.deep.equal(expectedResult);
  });
});
