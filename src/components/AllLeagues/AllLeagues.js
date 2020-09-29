import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import  {getAllLeagues}  from "../../actions/leagues/getAllLeagues";

const AllLeagues = () => {
    const dispatch = useDispatch();
    const setAllLeagues = useSelector(state => state.getAllLeagues);
    
    const fetchData = () => {
        dispatch(getAllLeagues());
    }

    useEffect(() => {
        fetchData();
    }, [])

    const showData = () => {
        if(!_.isEmpty(setAllLeagues.data)) {
            return (
            <div>
                {setAllLeagues.data.countrys.map(el => {
                    return (
                        <div>
                            {el.strLeague}
                            <img src={el.strBadge} alt="League Badge" />
                            <img src={el.strLogo} alt="League Logo" />
                        </div>
                    )
                })}
            </div>
                )
        }
        if (setAllLeagues.loading) {
            return <p>loading...</p>
        }
        if (setAllLeagues.errorMsg !== "") {
            return <p>{setAllLeagues.errorMsg}</p>
        }
        return <p>unable to get data</p>
    }

    console.log(setAllLeagues.data.countrys);

return (
    <div>
        All Leagues: {showData()}
    </div>
)
}

export default AllLeagues;