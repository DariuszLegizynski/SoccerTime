import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

//Components/Containers
import AllLeagues from '../allLeagues/allLeagues/allLeagues';
import League from "../allLeagues/league/league";
import Team from "../team/team";
import Header from "../header/Header";

import PrivateRoute from "../Private/PrivateRoute";

import UserSignIn from '../userAuth/UserSignIn';
import UserSignUp from '../userAuth/UserSignUp';
import UserProfile from "../userAuth/UserProfile";

const App = () => {
  return (
    <div className="App">
      <Route path={"/"} component={Header} />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path={"/home"} component={AllLeagues} />
        <Route path={"/allLeagues/:idLeague"} component={League} />
        <Route path={"/allTeams/:team"} component={Team} />

        <Route path={"/login"} component={UserSignIn} />
        <Route path={"/signup"} component={UserSignUp} />
        <PrivateRoute path={"/user"} component={UserProfile} />
        <Redirect to={"/home"} />
      </Switch>
    </div>
  );
}

export default App;
