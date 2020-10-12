import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

//Components/Containers
import AllLeagues from '../allLeagues/allLeagues/allLeagues';
import League from "../allLeagues/league/league";
import Team from "../team/team";
import UserPanel from "../userAuth/UserPanel";
import userProfile from "../userAuth/UserProfile";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact component={AllLeagues} />
        <Route path={"/allLeagues/:idLeague"} exact component={League} />
        <Route path={"/allTeams/:team"} exact component={Team} />

        <Route path={"/userPanel"} exact component={UserPanel} />
        <Route path={"/profile/:status"} exact component={userProfile} />

        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
