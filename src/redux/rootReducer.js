import { combineReducers } from "redux";
import { cityReducer } from "./cityReduser";
import { errorReducer } from "./errorReduser";
import { ipReducer } from "./ipReduser";
import { streetsReducer } from "./streetsReduser";


export const rootReducer = combineReducers({
    city: cityReducer,
    ip: ipReducer,
    streetsData: streetsReducer,
    error: errorReducer
})