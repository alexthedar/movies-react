import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as constants from "../../constants";
import * as actions from "../index";

const mockStore = configureStore([thunk]);
const store = mockStore({
  app: {
    error: "",
    isFetching: false
  }
});

describe("AppActions creators", () => {
  let expectedResult;
  let actualResult;

  beforeEach(() => {
    store.clearActions();
  });

  describe("setError action creator", () => {
    it("should create an action to set error data", () => {
      const error = "error";
      actualResult = actions.setError(error);
      expectedResult = {
        type: constants.SET_ERROR,
        error
      };
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe("setLoading action creator", () => {
    it("should create an action to set isFetching top data", () => {
      const isFetching = true;
      actualResult = actions.setLoading(isFetching);
      expectedResult = {
        type: constants.SET_LOADING,
        isFetching
      };
      expect(actualResult).toEqual(expectedResult);
    });
  });
});
