import { combineReducers } from 'redux';
import allCountriesReducer from './allCountries/allCountriesReducer';
import allLeaguesReducer from "./allLeagues/allLeagues/allLeaguesReducer";
import leagueReducer from "./allLeagues/league/leagueReducer";
import englishLeagueReducer from "./allLeagues/englishLeague/englishLeagueReducer";
import germanLeagueReducer from './allLeagues/germanLeague/germanLeagueReducer';

const rootReducer = combineReducers({
    allCountries: allCountriesReducer,
    allLeagues: allLeaguesReducer,
    league: leagueReducer,
    englishLeague: englishLeagueReducer,
    germanLeague: germanLeagueReducer
});

export default rootReducer;