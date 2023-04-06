import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";


const defaultState ={
    is_pressed: false,
}
const reducer = (state = defaultState, action) => {
    switch (action.type)
    {
        case "CHECKBOX_ON":
            return {...state,is_pressed: true}
        case "CHECKBOX_OFF":
            return {...state,is_pressed: false}


        default:
            return state
    }
}

const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);
