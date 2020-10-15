import React, { Fragment } from 'react';
import Header from './components/shared/UI/Header/Header';
import Chatroom from './components/Chatroom/Chatroom';
import SortingHat from './components/SortingHat/SortingHat';
import Quiz from './components/Quiz/Quiz';
import Characters from './components/Characters/Characters';
import Spells2 from './components/Spells/Spells2';
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
                <Route path="/spells" exact component={Spells2} />
                <Chatroom path="/chatroom" exact component={Chatroom} />
                <Quiz path="/quiz" exact component={Quiz} />
                <Characters path="/characters" exact component={Characters} />
                <SortingHat path="/sortinghat" exact component={SortingHat} />
              </Switch>
          </Router>
        </>
    )
}

export default App;
