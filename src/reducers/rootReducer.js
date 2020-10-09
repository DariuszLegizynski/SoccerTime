import { combineReducers } from 'redux';
import allCountriesReducer from './allCountries/allCountriesReducer';
import allLeaguesReducer from "./allLeagues/allLeagues/allLeaguesReducer";
import leagueReducer from "./allLeagues/league/leagueReducer";
import teamReducer from "./team/teamReducer";
import tableLookupReducer from "./allLeagues/tableLookup/tableLookupReducer";
import NextTeamEventsReducer from './team/nextTeamEventsReducer';
import PreviousTeamEventsReducer from './team/previousTeamEventsReducer';

const rootReducer = combineReducers({
    allCountries: allCountriesReducer,
    allLeagues: allLeaguesReducer,
    league: leagueReducer,
    team: teamReducer,
    tableLeague: tableLookupReducer,
    nextTeamEvents: NextTeamEventsReducer,
    previousTeamEvents: PreviousTeamEventsReducer
});

export default rootReducer;