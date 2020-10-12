import { GET_NEXT_LEAGUE_EVENTS_LOADING, GET_NEXT_LEAGUE_EVENTS_SUCCESS, GET_NEXT_LEAGUE_EVENTS_FAIL } from "../../../actions/index";

const DefaultState = {
    loading: false,
    data: {},
    errorMsg: ""
}

const NextLeagueEventsReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case GET_NEXT_LEAGUE_EVENTS_LOADING:
            return {
                ...state,
                laoding: true,
                errorMsg: ""
            }

        case GET_NEXT_LEAGUE_EVENTS_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "no upcoming League events found"
            }

        case GET_NEXT_LEAGUE_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                errorMsg: ""
            }

        default:
            return state;
    }
}

export default NextLeagueEventsReducer;