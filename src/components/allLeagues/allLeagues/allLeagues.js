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

    if(allCountriesArr.length > 254) {
        allLeaguesFiltered = allCountriesArr.flat().filter(el => el !== null);
        getAllLeagues = allLeaguesFiltered.flat();
    }

    let getAllZeroDivisionLeagues = [];
    let getAllFirstDivisionLeagues = [];
    let getAllSecondDivisionLeagues = [];
    let getAllThirdDivisionLeagues = [];
    if(!_.isEmpty(getAllLeagues)) {
        getAllZeroDivisionLeagues = getAllLeagues.filter(el => el.strDivision === "0");
        getAllFirstDivisionLeagues = getAllLeagues.filter(el => el.strDivision === "1");
        getAllSecondDivisionLeagues = getAllLeagues.filter(el => el.strDivision === "2");
        getAllThirdDivisionLeagues = getAllLeagues.filter(el => el.strDivision === "3");
    }

    
    if(!_.isEmpty(getAllLeagues)) {
        
    }

    const showData = () => {
        if(!_.isEmpty(selectAllLeagues.data)) {
            return(
                <div>
                Mostly Favorited Leagues:
                <br/>
                {getAllZeroDivisionLeagues.map(el => {
                    return (
                        <div key={shortid.generate()}>
                            {el.strLeague}
                        </div>
                    )}
                )}
                <br/>
                <br/>
                First Leagues:
                <br/>
                {getAllFirstDivisionLeagues.map(el => {
                    return (
                        <div key={shortid.generate()}>
                            {el.strLeague}
                        </div>
                    )}
                )}
                <br/>
                <br/>
                Second Leagues:
                <br/>
                {getAllSecondDivisionLeagues.map(el => {
                    return (
                        <div key={shortid.generate()}>
                            {el.strLeague}
                        </div>
                    )}
                )}
                <br/>
                <br/>
                Third Leagues:
                <br/>
                {getAllThirdDivisionLeagues.map(el => {
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
        <br/>
        <br/>
        All Leagues:
        <br />
        <br />
        {showData()}
    </div>
)
}

export default AllLeagues;
