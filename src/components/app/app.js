import React from 'react'
import './app.css'
import Header from "../header";
import {Route} from "react-router-dom";
import {Home, Cart} from "../../pages";

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/cart' component={Cart}/>
        </div>
    )
};

export default App;