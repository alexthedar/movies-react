import { createStore } from "redux";
import searchReducer from "../searchReducer";
import rootReducer from "../rootReducer";

const store = createStore(rootReducer);

describe("rootReducer", () => {
  it("should return the initial state of the app reducer", () => {
    expect(store.getState().search).toEqual(searchReducer(undefined, {}));
  });
});
