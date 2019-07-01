import * as constants from "../constants";
import { updateObject } from "../../shared/updateObject";

export const initialState = {
  queryString: "raider",
  activePage: 5,
  totalPages: 20
};

const setQueryString = (state, action) =>
  updateObject(state, { queryString: action.queryString });

const setActivePage = (state, action) =>
  updateObject(state, { activePage: action.activePage });

const setTotalPages = (state, action) =>
  updateObject(state, { totalPages: action.totalPages });

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_QUERY_STRING:
      return setQueryString(state, action);
    case constants.SET_ACTIVE_PAGE:
      return setActivePage(state, action);
    case constants.SET_TOTAL_PAGES:
      return setTotalPages(state, action);
    default:
      return state;
  }
};

export default searchReducer;
