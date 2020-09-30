import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import  { englishLeague }  from "../../../actions/leagues/englishLeague/englishLeague";

const EnglishLeague = () => {
    const dispatch = useDispatch();
    const selectEnglishLeague = useSelector(state => state.englishLeague);
    
    const fetchData = () => {
        dispatch(englishLeague());
    }

    useEffect(() => {
        fetchData();
    }, [])

    const showData = () => {
        if(!_.isEmpty(selectEnglishLeague.data)) {
            return selectEnglishLeague.data.countrys.map(el => {
                return (
                    <div>
                        {el.strLeague}
                    </div>
                )
            })
        }

        if (selectEnglishLeague.loading) {
            return <p>loading...</p>
        }

        if (selectEnglishLeague.errorMsg !== "") {
            return <p>{selectEnglishLeague.errorMsg}</p>
        }

        return <p>unable to get data</p>
    }

return (
    <div>
        English League: {showData()}
    </div>
)
}

export default EnglishLeague;
