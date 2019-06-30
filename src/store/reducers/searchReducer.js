import * as constants from '../constants';
import { updateObject } from "../../shared/updateObject";

export const initialState = {
  refSymbolTypeAhead: ['AA'],
};

const setSearchTypeAhead = (state, action) =>
  updateObject(state, { refSymbolTypeAhead: action.refSymbols });

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_REF_SYMBOLS:
      return setSearchTypeAhead(state, action);
    default:
      return state;
  }
};

export default searchReducer;
