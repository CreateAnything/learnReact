import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from "./redux/store";
store.subscribe(() =>{
    //监测redux中状态的变化,只要变化，重新渲染App组件
    ReactDOM.render(<App/>,document.getElementById('root'))
})
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ,document.getElementById('root'))