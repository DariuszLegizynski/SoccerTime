import React from "react";

import AllLeagues from "../allLeagues/allLeagues/allLeagues";
import EnglishLeague from "../allLeagues/englishLeague/englishLeague"
import GermanLeague from "../allLeagues/germanLeague/germanLeague";

const mainLandingPage = () => {
    return(
        <div>
            <AllLeagues />
            <EnglishLeague />
            <GermanLeague />
        </div>
    )
}

export default mainLandingPage;