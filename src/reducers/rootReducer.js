import { combineReducers } from 'redux';

import allLeagues from "./AllLeagues/allLeagues";

const rootReducer = combineReducers({
    getAllLeagues: allLeagues
});

export default rootReducer;