import React from 'react';
import './App.css';
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import {ActionType, StateType} from "./redux/store";

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
                           element={<Dialogs
                               dialogsPage={state.dialogsPage}
                               dispatch={dispatch}
                           />}
                    />
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
