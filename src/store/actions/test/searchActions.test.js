import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as constants from "../../constants";
import * as actions from "../index";

const mockStore = configureStore([thunk]);
const store = mockStore({
  search: {
    queryString: "",
    activePage: 1,
    totalPages: 1
  }
});
const error = { message: "error" };

describe("searchActions creators", () => {
  let expectedResult;
  let actualResult;

  beforeEach(() => {
    store.clearActions();
  });

  describe("setQueryString action creator", () => {
    it("should create an action set the query string", () => {
      const queryString = "test";
      actualResult = actions.setQueryString(queryString);
      expectedResult = {
        type: constants.SET_QUERY_STRING,
        queryString
      };
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe("setActivePage action creator", () => {
    it("should create an action to set the active page", () => {
      const activePage = 2;
      actualResult = actions.setActivePage(activePage);
      expectedResult = {
        type: constants.SET_ACTIVE_PAGE,
        activePage
      };
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe("setTotalPages action creator", () => {
    it("should create an action to set the total pages", () => {
      const totalPages = 99;
      actualResult = actions.setTotalPages(totalPages);
      expectedResult = {
        type: constants.SET_TOTAL_PAGES,
        totalPages
      };
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe("searchMovies action creator", () => {
    it("should create an action to set query string and trigger movie search", () => {
      const queryString = "test";
      store.dispatch(actions.searchMovies(queryString));
      actualResult = store.getActions();
      expectedResult = [
        actions.setQueryString(queryString),
        actions.fetchMovies()
      ];
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe("goToPage action creator", () => {
    const store = mockStore({
      search: {
        queryString: "test",
        activePage: 1,
        totalPages: 1
      },
      movies: {
        moviesList: {
          1: [{ title: "test" }],
          2: []
        }
      }
    });
    it("it should only set activePage if store already has content", () => {
      store.dispatch(actions.goToPage(1));
      actualResult = store.getActions();
      expectedResult = [actions.setActivePage(1)];
      return expect(actualResult).toEqual(expectedResult);
    });
    it("it should setLoading and trigger api get if store does not have content", () => {
      store.clearActions();
      store.dispatch(actions.goToPage(2));
      actualResult = store.getActions();
      expectedResult = [actions.setLoading(true), actions.fetchMovies()];
      return expect(actualResult).toEqual(expectedResult);
    });
  });
});
