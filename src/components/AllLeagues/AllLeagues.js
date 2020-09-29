import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import  { getAllLeagues }  from "../../actions/leagues/getAllLeagues";

const AllLeagues = () => {
    const dispatch = useDispatch();
    const setAllLeagues = useSelector(state => state.getAllLeagues);
    
console.log({getAllLeagues});
console.log({setAllLeagues});

    const fetchData = () => {
        dispatch(getAllLeagues);
    }

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const showData = () => {
        if(!_.isEmpty(setAllLeagues)) {
            return <p>I have Data</p>
        }
        if (setAllLeagues.loading) {
            return <p>loading...</p>
        }
        if (setAllLeagues.errorMsg !== "") {
            return <p>{setAllLeagues.errorMsg}</p>
        }
        return <p>unable to get data</p>
    }

return (
    <div>
        All Leagues: {showData()}
    </div>
)
}

export default AllLeagues;