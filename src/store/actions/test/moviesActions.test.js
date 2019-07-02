import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as constants from "../../constants";
import * as actions from "../index";
import Axios from "axios";
import {
  baseURL,
  key,
  languageFlag,
  adultFlag,
  pageFlag,
  queryFlag,
  searchPath
} from "../moviesActions";

const mockStore = configureStore([thunk]);
const store = mockStore({
  movies: {
    moviesList: null
  }
});
const error = { message: "error" };

describe("moviesActions creators", () => {
  let expectedResult;
  let actualResult;

  beforeEach(() => {
    store.clearActions();
  });

  describe("searchURL action creator", () => {
    it("should create a search URL", () => {
      actualResult = actions.searchURL({ queryString: "test", activePage: 99 });
      expectedResult = `${baseURL}${searchPath}${key}${languageFlag}${queryFlag}test${pageFlag}99${adultFlag}`;
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe("fetchMovies action creator", () => {
    it("should create an action to signal fetch movies", () => {
      actualResult = actions.fetchMovies();
      expectedResult = {
        type: constants.GET_MOVIES_LIST
      };
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe("setMoviesList action creator", () => {
    it("should create an action to set movies list", () => {
      const movies = ["test"];
      actualResult = actions.setMoviesList(movies);
      expectedResult = {
        type: constants.SET_MOVIES_LIST,
        movies
      };
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe("getMovieSearch action creator", () => {
    it("should trigger a call to api and dispatch actions to set store with retrieved data", () => {
      Axios.get.mockResolvedValue({
        data: { page: 1, total_pages: 2, results: [{ title: "test" }] }
      });

      return store
        .dispatch(actions.getMovieSearch({ queryString: "test" }))
        .then(() => {
          actualResult = store.getActions();
          expectedResult = [
            actions.fetchMovies(),
            actions.setTotalPages(2),
            actions.setMoviesList({ 1: [{ title: "test" }] }),
            actions.setActivePage(1),
            actions.setLoading(false)
          ];
          return expect(actualResult).toEqual(expectedResult);
        });
    });

    it("should trigger failure actions creator if rejected", () => {
      Axios.get.mockRejectedValue(error);

      return store
        .dispatch(actions.getMovieSearch({ queryString: "test" }))
        .then(() => {
          actualResult = store.getActions();
          expectedResult = [actions.fetchMovies(), actions.setError(error)];
          return expect(actualResult).toEqual(expectedResult);
        });
    });
  });

  describe("getNewPageMovieSearch action creator", () => {
    const store = mockStore({
      movies: {
        moviesList: { 1: [{ title: "test1" }] }
      }
    });
    it("should trigger a call to api and dispatch actions to set store with retrieved data", () => {
      Axios.get.mockResolvedValue({
        data: { page: 2, total_pages: 2, results: [{ title: "test2" }] }
      });
      return store
        .dispatch(
          actions.getNewPageMovieSearch({ queryString: "test", newPage: 2 })
        )
        .then(() => {
          actualResult = store.getActions();
          expectedResult = [
            actions.fetchMovies(),
            actions.setMoviesList({
              1: [{ title: "test1" }],
              2: [{ title: "test2" }]
            }),
            actions.setActivePage(2),
            actions.setLoading(false)
          ];
          return expect(actualResult).toEqual(expectedResult);
        });
    });

    it("should trigger failure actions creator if rejected", () => {
      store.clearActions();
      Axios.get.mockRejectedValue(error);
      return store
        .dispatch(
          actions.getNewPageMovieSearch({ queryString: "test", newPage: 2 })
        )
        .then(() => {
          actualResult = store.getActions();
          expectedResult = [actions.fetchMovies(), actions.setError(error)];
          return expect(actualResult).toEqual(expectedResult);
        });
    });
  });
});
