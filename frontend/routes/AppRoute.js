import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage'; 


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' Component={HomePage} />
            </Switch>
        </Router>
    );
};

export default App;