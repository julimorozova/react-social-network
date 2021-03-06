import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App
                        state={store.getState()}
                        dispatch={store.dispatch.bind(store)}
                    />
                </Provider>
            </BrowserRouter>


        </React.StrictMode>,
        document.getElementById('root')
);
