import React from 'react';
import {Switch, Route, NavLink, Redirect} from "react-router-dom";
import SignedIn from '../signedIn/signedIn';
import SignedOut from '../signedOut/signedOut';

//Components/Containers
import AllLeagues from '../allLeagues/allLeagues/allLeagues';
import League from "../allLeagues/league/league";
import Team from "../team/team";

const App = () => {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>SEARCH</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={AllLeagues} />
        <Route path={"/allLeagues/:idLeague"} exact component={League} />
        <Route path={"/allTeams/:team"} exact component={Team} />
        <Route path={"/signedin"} exact component={SignedIn} />
        <Route path={"/signedout"} exact component={SignedOut} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
