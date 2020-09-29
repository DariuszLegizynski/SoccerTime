import React from 'react';
import {Switch, Route, NavLink, Redirect} from "react-router-dom";
import SignedIn from '../../containers/SignedIn';
import SignedOut from '../../containers/SignedOut';

//All Components
import AllLeagues from '../AllLeagues/AllLeagues';



const App = () => {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>SEARCH</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={AllLeagues} />
        <Route path={"/signedin"} exact component={SignedIn} />
        <Route path={"/signedout"} exact component={SignedOut} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
