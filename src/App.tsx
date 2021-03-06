import React from 'react';
import './App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Switch,} from 'react-router-dom';
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import {ActionType, StateType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
};

const App: React.FC<AppPropsType> = () => {
    return (
        <div>
            <HeaderContainer/>
            <div className="app-wrapper">
                <Navbar/>
                <Switch>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer />}
                    />
                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}
                    />
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </Switch>

            </div>
        </div>
    );
};

export default App;
