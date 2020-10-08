import { combineReducers } from 'redux';
import allCountriesReducer from './allCountries/allCountriesReducer';
import allLeaguesReducer from "./allLeagues/allLeagues/allLeaguesReducer";
import leagueReducer from "./allLeagues/league/leagueReducer";
import teamReducer from "./team/teamReducer";
import tableLookupReducer from "./allLeagues/tableLookup/tableLookupReducer";

const rootReducer = combineReducers({
    allCountries: allCountriesReducer,
    allLeagues: allLeaguesReducer,
    league: leagueReducer,
    team: teamReducer,
    tableLeague: tableLookupReducer
});

export default rootReducer;