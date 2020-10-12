import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

//Components/Containers
import AllLeagues from '../allLeagues/allLeagues/allLeagues';
import League from "../allLeagues/league/league";
import Team from "../team/team";

import UserSignIn from '../userAuth/UserSignIn';
import UserSignUp from '../userAuth/UserSignUp';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact component={AllLeagues} />
        <Route path={"/allLeagues/:idLeague"} exact component={League} />
        <Route path={"/allTeams/:team"} exact component={Team} />

        <Route path={"/login"} exact component={UserSignIn} />
        <Route path={"/signup"} exact component={UserSignUp} />

        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
