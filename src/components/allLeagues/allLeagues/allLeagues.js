import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import shortid from "shortid";

import  { allLeagues }  from "../../../actions/leagues/allLeagues/allLeagues";
import  { allCountries }  from "../../../actions/allCountries/allCountries";

const AllLeagues = () => {
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

    let allCountriesArr = [];
    let allLeaguesFiltered = [];
    let getAllLeagues = [];

    allCountriesArr = (Object.values(selectAllLeagues.data));

    if(allCountriesArr.length > 254){
        allLeaguesFiltered = allCountriesArr.flat().filter(el => el !== null);
        getAllLeagues = allLeaguesFiltered.flat();
    }

    const showData = () => {
        if(!_.isEmpty(getAllLeagues)) {
            return(
                <div>
                {getAllLeagues.map(el => {
                    return (
                        <div key={shortid.generate()}>
                            {el.strLeague}
                        </div>
                    )}
                )}
                </div>
            )
        }
        
        if (selectAllLeagues.loading) {
            return <p>loading...</p>
        }

        if (selectAllLeagues.errorMsg !== "") {
            return <p>{selectAllLeagues.errorMsg}</p>
        }

        return <p>Loading...</p>;
    }

return (
    <div>
        <br />
        <br />
            allLeagues: {showData()}
        <br />
        <br />
    </div>
)
}

export default AllLeagues;
