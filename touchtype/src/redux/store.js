import {legacy_createStore} from "redux"
import { resultReducer } from "./result/result.reducer"

export const store = legacy_createStore(resultReducer) //intializing the redux store