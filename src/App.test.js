import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import App from "./App";
import fakeData from "./store/__mocks__/fakeStore";

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([thunk]);
let store = null;

const initialState = {
  error: null,
  ...fakeData
};

describe("App Component", () => {
  let wrapper = {};

  beforeEach(() => {
    store = mockStore(initialState);

    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
