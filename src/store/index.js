import {createStore, combineReducers} from "redux";
import accountReducer from "store/accountReducer";

const reducers = combineReducers({
    account: accountReducer
})

const store = createStore(reducers)
export default store
