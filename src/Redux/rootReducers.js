import countReducer from "./count/count.reducer";
import { combineReducers } from "redux";
import { defaults } from "browserslist";

const reducer = combineReducers({
  count: countReducer,
});

export default reducer;
