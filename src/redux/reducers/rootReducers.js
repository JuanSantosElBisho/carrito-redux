import { combineReducers } from "redux";
import productReducer from "./productShopReducers";

const rootReducers = combineReducers({
    product: productReducer
});

export default rootReducers;