import { combineReducers } from 'redux';

import allLeaguesReducer from "./allLeagues/allLeagues/allLeaguesReducer";
import englishLeagueReducer from "./allLeagues/englishLeague/englishLeagueReducer";
import germanLeagueReducer from './allLeagues/germanLeague/germanLeagueReducer';

const rootReducer = combineReducers({
    allLeagues: allLeaguesReducer,
    englishLeague: englishLeagueReducer,
    germanLeague: germanLeagueReducer
});

export default rootReducer;