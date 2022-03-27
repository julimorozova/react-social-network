import { createStore , combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";

const  reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
});
export const store = createStore(reducers);