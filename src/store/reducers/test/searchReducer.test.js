import searchReducer, { initialState } from "../searchReducer";
import * as actions from "../../actions/index";

describe("search reducer", () => {
  let action;
  let actualResult;
  let expectedResult;

  it("should return the initial state", () => {
    expect(searchReducer(undefined, {})).toEqual({
      queryString: "",
      activePage: 1,
      totalPages: 1
    });
  });

  it("should react to SET_QUERY_STRING", () => {
    action = actions.setQueryString("test");
    actualResult = searchReducer(initialState, action);
    expectedResult = {
      ...initialState,
      queryString: "test"
    };
    expect(actualResult).toEqual(expectedResult);
  });

  it("should react to SET_ACTIVE_PAGE", () => {
    action = actions.setActivePage(99);
    actualResult = searchReducer(initialState, action);
    expectedResult = {
      ...initialState,
      activePage: 99
    };
    expect(actualResult).toEqual(expectedResult);
  });

  it("should react to SET_TOTAL_PAGES", () => {
    action = actions.setTotalPages(11);
    actualResult = searchReducer(initialState, action);
    expectedResult = {
      ...initialState,
      totalPages: 11
    };
    expect(actualResult).toEqual(expectedResult);
  });
});
