import { combineReducers } from 'redux';
import allCountriesReducer from './allCountries/allCountriesReducer';
import allLeaguesReducer from "./allLeagues/allLeagues/allLeaguesReducer";
import englishLeagueReducer from "./allLeagues/englishLeague/englishLeagueReducer";
import germanLeagueReducer from './allLeagues/germanLeague/germanLeagueReducer';

const rootReducer = combineReducers({
    allCountries: allCountriesReducer,
    allLeagues: allLeaguesReducer,
    englishLeague: englishLeagueReducer,
    germanLeague: germanLeagueReducer
});

export default rootReducer;