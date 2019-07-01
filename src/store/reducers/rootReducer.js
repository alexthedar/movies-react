import { combineReducers } from "redux";
import movies from "./moviesReducer";
import search from "./searchReducer";
import app from "./appReducer";

const rootReducer = combineReducers({ movies, search, app });

export default rootReducer;
