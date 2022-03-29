import React from 'react';
import './App.css';
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import {ActionType, StateType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
};

const App: React.FC<AppPropsType> = ({state, dispatch}) => {
    return (
        <BrowserRouter>
            <Header/>
            <div className="app-wrapper">
                <Navbar/>
                <Routes>
                    <Route path='/profile'
                           element={<Profile
                               profilePage={state.profilePage}
                               dispatch={dispatch}
                           />}
                    />
                    <Route path='/dialogs/*'
                           element={<DialogsContainer />}
                    />
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
