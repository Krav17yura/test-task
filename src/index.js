import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from "react-redux";
import store from "../src/redux/store";


ReactDOM.render(
    <Router>
      <Provider store={store}>
          <App/>
      </Provider>
    </Router>,

    document.getElementById('root')
);

