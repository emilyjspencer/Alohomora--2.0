import React, { Fragment } from 'react';
import Header from './components/UI/Header/Header';
import Chatroom from './components/Chatroom/Chatroom';
import SortingHat from './components/SortingHat/SortingHat';
import Quiz from './components/Quiz/Quiz';
import Spells from './components/Spells/Spells';
import User from './components/User/User';
import MainNavigation from './components/shared/MainNavigation/MainNavigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <>
          <Router>
            <MainNavigation />
              <Switch>
                <Route path="/" exact component={Header}  component={User}/>
                <Route path="/spells" exact component={Spells} />
                <Chatroom path="/chatroom" exact component={Chatroom} />
                <Quiz path="/quiz" exact component={Quiz} />
                <SortingHat path="/sortinghat" exact component={SortingHat} />
              </Switch>
          </Router>
        </>
    )
}

export default App;
