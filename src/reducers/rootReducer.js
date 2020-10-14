import { combineReducers } from 'redux';
import { firebaseReducer } from "react-redux-firebase";
import allCountriesReducer from './allCountries/allCountriesReducer';
import allLeaguesReducer from "./allLeagues/allLeagues/allLeaguesReducer";
import leagueReducer from "./allLeagues/league/leagueReducer";
import teamReducer from "./team/teamReducer";
import tableLookupReducer from "./allLeagues/tableLookup/tableLookupReducer";
import NextTeamEventsReducer from './team/nextTeamEventsReducer';
import PreviousTeamEventsReducer from './team/previousTeamEventsReducer';
import NextLeagueEventsReducer from "./allLeagues/league/nextLeagueEventsReducer";
import PreviousLeagueEventsReducer from "./allLeagues/league/previousLeagueEventsReducer";

const rootReducer = combineReducers({
    firebaseReducer,
    allCountries: allCountriesReducer,
    allLeagues: allLeaguesReducer,
    league: leagueReducer,
    team: teamReducer,
    tableLeague: tableLookupReducer,
    nextTeamEvents: NextTeamEventsReducer,
    previousTeamEvents: PreviousTeamEventsReducer,
    nextLeagueEvents: NextLeagueEventsReducer,
    previousLeagueEvents: PreviousLeagueEventsReducer
});

export default rootReducer;