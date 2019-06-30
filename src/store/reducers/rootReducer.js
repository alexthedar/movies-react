import { combineReducers } from "redux";
import market from "./marketReducer";
import stockDetail from "./stockDetailReducer";
import search from "./searchReducer";
import app from "./appReducer";

const rootReducer = combineReducers({market, stockDetail, search, app});

export default rootReducer;
