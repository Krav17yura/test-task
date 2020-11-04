import {combineReducers} from "redux";
import reCart from "./reCart";
import reItems from "./reItems";

const rootReducer = combineReducers({
    reItems,
    reCart
})

export default rootReducer;