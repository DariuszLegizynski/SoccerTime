import { GET_PREVIOUS_TEAM_EVENTS_LOADING, GET_PREVIOUS_TEAM_EVENTS_SUCCESS, GET_PREVIOUS_TEAM_EVENTS_FAIL } from "../../actions/index";

const DefaultState = {
    loading: false,
    data: {},
    errorMsg: ""
}

const PreviousTeamEventsReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case GET_PREVIOUS_TEAM_EVENTS_LOADING:
            return {
                ...state,
                laoding: true,
                errorMsg: ""
            }

        case GET_PREVIOUS_TEAM_EVENTS_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "no past team events found"
            }

        case GET_PREVIOUS_TEAM_EVENTS_SUCCESS:
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

export default PreviousTeamEventsReducer;