import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

//Components/Containers
import AllLeagues from '../allLeagues/allLeagues/allLeagues';
import League from "../allLeagues/league/league";
import Team from "../team/team";
import Header from "../header/Header";

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
          <Route path={"/home"} exact component={AllLeagues} />
          <Route path={"/allLeagues/:idLeague"} exact component={League} />
          <Route path={"/allTeams/:team"} exact component={Team} />

          <Route path={"/login"} exact component={UserSignIn} />
          <Route path={"/signup"} exact component={UserSignUp} />
          <Route path={"/userprofile"} exact component={UserProfile} />
        </Switch>

        <Redirect to={"/home"} />
    </div>
  );
}

export default App;
