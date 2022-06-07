import { legacy_createStore as createstore } from "redux";
import { reducer } from "./reducer";



export const initState = {
    count:0
}

export const store = createstore(reducer , initState)