import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import  { allLeagues }  from "../../../actions/leagues/allLeagues/allLeagues";

const AllLeagues = () => {
    const dispatch = useDispatch();
    const selectAllLeagues = useSelector(state => state.allLeagues);
    
    const fetchData = () => {
        dispatch(allLeagues());
    }

    useEffect(() => {
        fetchData();
    }, [])

    const showData = () => {
        if(!_.isEmpty(selectAllLeagues.data)) {
            return selectAllLeagues.data.countries.map(el => {
                return (
                    <div>
                        {el.name_en}
                    </div>
                )
            })
        }

        if (selectAllLeagues.loading) {
            return <p>loading...</p>
        }

        if (selectAllLeagues.errorMsg !== "") {
            return <p>{selectAllLeagues.errorMsg}</p>
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
