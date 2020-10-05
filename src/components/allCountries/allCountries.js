import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import  { allCountries }  from "../../actions/allCountries/allCountries";
import  { allLeagues }  from "../../actions/leagues/allLeagues/allLeagues";

const AllCountries = () => {
    const dispatch = useDispatch();
    const selectAllCountries = useSelector(state => state.allCountries);
    const selectAllLeagues = useSelector(state => state.allLeagues);
    
    useEffect(() => {
        dispatch(allCountries());
    }, [dispatch])

    useEffect(() => {
        if(!_.isEmpty(selectAllCountries.data)) {
            selectAllCountries.data.countries.map(el => dispatch(allLeagues(el.name_en)));
        }
    }, [dispatch, selectAllCountries.data])



    const showData = () => {
        if(!_.isEmpty(selectAllLeagues.data)) {
            Object.keys(selectAllLeagues.data).forEach((key) => (selectAllLeagues.data[key] == null) && delete selectAllLeagues.data[key]);
            //console.log(selectAllLeagues.data);
            return selectAllCountries.data.countries.map(el => {
                return (
                    <div>
                        {el.name_en}
                    </div>
                )
            })
        }

        if (selectAllCountries.loading) {
            return <p>loading...</p>
        }

        if (selectAllCountries.errorMsg !== "") {
            return <p>{selectAllCountries.errorMsg}</p>
        }

        return <p>unable to get data</p>
    }

return (
    <div>
        <br />
        allCountries: {showData()}
        <br />
    </div>
)
}

export default AllCountries;
