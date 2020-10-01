import React from "react";

import AllCountries from "../../components/allCountries/allCountries";
import AllLeagues from "../../components/allLeagues/allLeagues/allLeagues";
import EnglishLeague from "../../components/allLeagues/englishLeague/englishLeague"
import GermanLeague from "../../components/allLeagues/germanLeague/germanLeague";

const mainLandingPage = () => {
    return(
        <div>
            {/* <AllCountries /> */}
            <AllLeagues />
            {/* <EnglishLeague />
            <GermanLeague /> */}
        </div>
    )
}

export default mainLandingPage;