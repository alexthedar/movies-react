import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as constants from "../../constants";
import * as actions from "../index";

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
      expectedResult =
        "https://api.themoviedb.org/3/search/movie?api_key=057dfa32a18eed0f2dc23dc2e80ed8a0&language=en-US&query=test&page=99&include_adult=false";
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

  // describe("getMovieSearch action creator", () => {
  //   it("should set the market tops data in state", () => {
  //     iexGet.topsData.mockResolvedValue(["data"]);

  //     return store.dispatch(actions.getMarketTops()).then(() => {
  //       actualResult = store.getActions();
  //       expectedResult = [
  //         actions.fetchMarketTop(),
  //         actions.setMarketTopData(["data"])
  //       ];
  //       return expect(actualResult).toEqual(expectedResult);
  //     });
  //   });

  //   it("should trigger failure actions creator if rejected", () => {
  //     iexGet.topsData.mockRejectedValue(error);

  //     return store.dispatch(actions.getMarketTops()).then(() => {
  //       actualResult = store.getActions();
  //       expectedResult = [actions.setError(error.message)];
  //       return expect(actualResult).toEqual(expectedResult);
  //     });
  //   });
  // });

  // describe("getNewPageMovieSearch action creator", () => {
  //   it("should set the market tops data in state", () => {
  //     iexGet.topsData.mockResolvedValue(["data"]);

  //     return store.dispatch(actions.getMarketTops()).then(() => {
  //       actualResult = store.getActions();
  //       expectedResult = [
  //         actions.fetchMarketTop(),
  //         actions.setMarketTopData(["data"])
  //       ];
  //       return expect(actualResult).toEqual(expectedResult);
  //     });
  //   });

  //   it("should trigger failure actions creator if rejected", () => {
  //     iexGet.topsData.mockRejectedValue(error);

  //     return store.dispatch(actions.getMarketTops()).then(() => {
  //       actualResult = store.getActions();
  //       expectedResult = [actions.setError(error.message)];
  //       return expect(actualResult).toEqual(expectedResult);
  //     });
  //   });
  // });
});
