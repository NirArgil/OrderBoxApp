import { combineReducers } from "redux";

import ordersReducer from "./reducer";

const rootReducer = combineReducers({
    orders: ordersReducer,
});

export default rootReducer;