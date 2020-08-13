import React, { Fragment } from 'react';
import Header from './components/UI/Header/Header';
import Chatroom from './components/Chatroom/Chatroom';
import SortingHat from './components/SortingHat/SortingHat';
import Quiz from './components/Quiz/Quiz';
import Spells from './components/Spells/Spells';
import User from './components/User/User';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <>
          <Router>
              <Switch>
                <Route path="/" exact component={Header} />
                <Route path="/spells" exact component={Spells} />
                <Chatroom path="/chatroom" exact component={Chatroom} />
                <Quiz path="/quiz" exact component={Quiz} />
                <SortingHat path="/sortinghat" exact component={SortingHat} />
                <User path="/user" exact component={User} />
              </Switch>
          </Router>
        </>
    )
}

export default App;
