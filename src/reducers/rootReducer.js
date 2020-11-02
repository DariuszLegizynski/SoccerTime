import { combineReducers } from 'redux';
import { firebaseReducer } from "react-redux-firebase";
import allCountriesReducer from './allCountries/allCountriesReducer';
import allLeaguesReducer from "./allLeagues/allLeagues/allLeaguesReducer";
import leagueReducer from "./allLeagues/league/leagueReducer";
import leagueIdReducer from "./allLeagues/league/leagueIdReducer";
import teamReducer from "./team/teamReducer";
import tableLookupReducer from "./allLeagues/tableLookup/tableLookupReducer";
import NextTeamEventsReducer from './team/nextTeamEventsReducer';
import PreviousTeamEventsReducer from './team/previousTeamEventsReducer';
import NextLeagueEventsReducer from "./allLeagues/league/nextLeagueEventsReducer";
import PreviousLeagueEventsReducer from "./allLeagues/league/previousLeagueEventsReducer";
import AuthReducer from './auth/authReducer';
import favoritedLeaguesReducer from "./favorites/favoritedLeaguesReducer";
import favoritedTeamsReducer from "./favorites/favoritedTeamsReducer";
import searchTeamReducer from './team/searchTeamReducer';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    allCountries: allCountriesReducer,
    allLeagues: allLeaguesReducer,
    league: leagueReducer,
    leagueId: leagueIdReducer,
    team: teamReducer,
    tableLeague: tableLookupReducer,
    nextTeamEvents: NextTeamEventsReducer,
    previousTeamEvents: PreviousTeamEventsReducer,
    nextLeagueEvents: NextLeagueEventsReducer,
    previousLeagueEvents: PreviousLeagueEventsReducer,
    auth: AuthReducer,
    favoritedLeagues: favoritedLeaguesReducer,
    favoritedTeams: favoritedTeamsReducer,
    searchTeam: searchTeamReducer
});

export default rootReducer;

