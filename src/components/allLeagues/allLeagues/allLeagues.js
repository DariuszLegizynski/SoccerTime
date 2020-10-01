import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import  { allLeagues }  from "../../../actions/leagues/allLeagues/allLeagues";
import  { allCountries }  from "../../../actions/allCountries/allCountries";

const AllLeagues = () => {
    const dispatch = useDispatch();
    const selectAllLeagues = useSelector(state => state.allLeagues);
    const selectAllCountries = useSelector(state => state.allCountries);

    useEffect(() => {
        dispatch(allCountries());
    }, [dispatch])

    // const showData = () => {
    //     if(!_.isEmpty(selectAllLeagues.data)) {
    //         return selectAllLeagues.data.countrys.map(el => {
    //             return (
    //                 <div>
    //                     {el.strLeague}
    //                 </div>
    //             )
    //         })
    //     }

    //     if (selectAllLeagues.loading) {
    //         return <p>loading...</p>
    //     }

    //     if (selectAllLeagues.errorMsg !== "") {
    //         return <p>{selectAllLeagues.errorMsg}</p>
    //     }

    //     return <p>unable to get data</p>
    // }

    useEffect(() => {
        if(!_.isEmpty(selectAllCountries.data)) {
            selectAllCountries.data.countries.map(el => dispatch(allLeagues(el.name_en)));
        }
    }, [dispatch, selectAllCountries.data])

    const showData = () => {
        if(!_.isEmpty(selectAllLeagues.data.countrys)) {
            // console.log(selectAllLeagues.data.countrys.map(el=>el.strLeague))
            return(
                <div>
                    {selectAllLeagues.data.countrys.map(el => {
                    return (
                        <div>{el.strLeague}</div>
                    )}
                )}
                </div>
            )
        }
        
        if (selectAllLeagues.loading) {
            return <p>loading...</p>
        }

        if (selectAllLeagues.errorMsg !== "") {
            return <p>{selectAllCountries.errorMsg}</p>
        }

        return <p>unable to get data</p>;
    }

return (
    <div>
        {/* All Leagues: {showData()} */}
        <br />
        <br />
        All Leagues: {showData()}
        <br />
        <br />
    </div>
)
}

export default AllLeagues;
