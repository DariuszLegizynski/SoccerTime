import React from 'react';
import {Switch, Route, NavLink, Redirect} from "react-router-dom";
import SignedIn from '../../containers/signedIn';
import SignedOut from '../../containers/signedOut';

//Components
import mainLandingPage from "../mainLandingPage/mainLandingPage";

const App = () => {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>SEARCH</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={mainLandingPage} />
        <Route path={"/signedin"} exact component={SignedIn} />
        <Route path={"/signedout"} exact component={SignedOut} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
