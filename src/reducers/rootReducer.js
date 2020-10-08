import { combineReducers } from 'redux';
import allCountriesReducer from './allCountries/allCountriesReducer';
import allLeaguesReducer from "./allLeagues/allLeagues/allLeaguesReducer";
import leagueReducer from "./allLeagues/league/leagueReducer";
import teamReducer from "./team/teamReducer";

const rootReducer = combineReducers({
    allCountries: allCountriesReducer,
    allLeagues: allLeaguesReducer,
    league: leagueReducer,
    team: teamReducer,
});

export default rootReducer;