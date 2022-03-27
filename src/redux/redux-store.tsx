import { createStore , combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";

const  rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);
