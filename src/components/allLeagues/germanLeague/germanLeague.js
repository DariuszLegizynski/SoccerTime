import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import  { germanLeague }  from "../../../actions/leagues/germanLeague/germanLeague";

const GermanLeague = () => {
    const dispatch = useDispatch();
    const selectGermanLeague = useSelector(state => state.germanLeague);
    
    useEffect(() => {
        dispatch(germanLeague());
    }, [dispatch]);

    const showData = () => {
        if(!_.isEmpty(selectGermanLeague.data)) {
            return selectGermanLeague.data.countrys.map(el => {
                return (
                    <div>
                        {el.strLeague}
                    </div>
                )
            })
        }

        if (selectGermanLeague.loading) {
            return <p>loading...</p>
        }

        if (selectGermanLeague.errorMsg !== "") {
            return <p>{selectGermanLeague.errorMsg}</p>
        }

        return <p>unable to get data</p>
    }

return (
    <div>
        german League: {showData()}
    </div>
)
}

export default GermanLeague;
