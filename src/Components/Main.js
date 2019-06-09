import React from 'react';
import Nav from './Nav';
import DayOne from './DayOne/DayOne';
import DayTwo from './DayTwo/DayTwo';
import DayThree from './DayThree/DayThree';
import Splash from './Splash';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = () => {

    return (
        <React.Fragment>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/" component={ Splash } />
                    <Route exact path="/day-one" component={ DayOne } />
                    <Route exact path="/day-two" component={ DayTwo } />
                    <Route exact path="/day-three" component={ DayThree } />
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default Main;