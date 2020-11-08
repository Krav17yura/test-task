import React from 'react'
import './app.css'
import {Grid} from "@material-ui/core";
import Header from "../header";
import {Route} from "react-router-dom";
import {Home, Cart} from "../../pages";

const App = () => {
    return (
     /*   <div className="wrapper">
            <Header/>
            <Route exact path='/' component={Home}/>

        </div>*/
    <Grid container >
        <Grid  item xs={12} >
            <Header/>
        </Grid>
        <Grid item container xs={12} justify={"center"}>
            <Grid container item xl={1}  />
            <Grid xs={12} sm={10} item container justify="center"  >
                <Route exact path='/' component={Home}/>
                <Route exact path='/cart' component={Cart}/>
            </Grid>
            <Grid container item xl={1} />
        </Grid>
    </Grid>
    )
};

export default App;