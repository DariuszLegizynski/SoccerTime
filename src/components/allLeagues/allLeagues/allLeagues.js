import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import _ from "lodash";
import shortid from "shortid";

import  { allLeagues }  from "../../../actions/leagues/allLeagues/allLeagues";
import  { allCountries }  from "../../../actions/allCountries/allCountries";
import { getFavoritedLeagues } from "../../../actions/favorites/getFavoritedLeagues";

//styles
import iconSprites from "../../../resources/icons/icomoon/sprite.svg";

//the api provides 255 country names.
//TODO: Hardcoded till I find a better solution.
const ALL_COUNTRIES_LENGTH = 254;

const AllLeagues = () => {
    const dispatch = useDispatch();
    const selectAllCountries = useSelector(state => state.allCountries);
    const selectAllLeagues = useSelector(state => state.allLeagues);

    useEffect(() => {
        dispatch(allCountries());
    }, [dispatch]);

    useEffect(() => {
        if(!_.isEmpty(selectAllCountries.data)) {
            selectAllCountries.data.countries.map(el => dispatch(allLeagues(el.name_en)));
        }
    }, [dispatch, selectAllCountries.data]);

    let allCountriesArr = [];

    allCountriesArr = (Object.values(selectAllLeagues.data));

    let allLeaguesFiltered = [];
    let getAllLeagues = [];

    if(allCountriesArr.length > ALL_COUNTRIES_LENGTH) {
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

    const showData = () => {
        if(!_.isEmpty(selectAllLeagues.data)) {
            return (
                <React.Fragment>
                <h2 className="AllLeagues__h2">Most Favorited Leagues:</h2>
                {getAllZeroDivisionLeagues.map(el => {
                    return (
                        <div key={shortid.generate()}>
                            <h3 className="AllLeagues__h3">{el.strLeague}</h3>
                            <img className="AllLeagues_badge" src={el.strBadge+"/preview"} alt="League Badge" />
                            <button onClick={() => dispatch(getFavoritedLeagues(el.strLeague, el.idLeague))}>
                                <svg className="AllLeagues__icon--favorite icon">
                                    <use href={iconSprites + "#icon-soccer"} />
                                </svg>
                            </button>
                            <Link to={{pathname: `/allLeagues/${el.idLeague}`, state:{leagueName: el.strLeague}}}>View</Link>
                        </div>
                    )}
                )}
                <h2 className="AllLeagues__h2">First Leagues:</h2>
                {getAllFirstDivisionLeagues.map(el => {
                    return (
                        <div key={shortid.generate()}>
                            <h3 className="AllLeagues__h3">{el.strLeague}</h3>
                            <img className="AllLeagues_badge" src={el.strBadge+"/preview"} alt="League Badge" />
                            <button onClick={() => dispatch(getFavoritedLeagues(el.strLeague, el.idLeague))}>
                                <svg className="AllLeagues__icon--favorite icon">
                                    <use href={iconSprites + "#icon-soccer"} />
                                </svg>
                            </button>
                            <Link to={{pathname: `/allLeagues/${el.idLeague}`, state:{leagueName:el.strLeague}}}>View</Link>
                        </div>
                    )}
                )}
                <h2 className="AllLeagues__h2">Second Leagues:</h2>
                {getAllSecondDivisionLeagues.map(el => {
                    return (
                        <div key={shortid.generate()}>
                            <h3 className="AllLeagues__h3">{el.strLeague}</h3>
                            <img className="AllLeagues_badge" src={el.strBadge+"/preview"} alt="League Badge" />
                            <button onClick={() => dispatch(getFavoritedLeagues(el.strLeague, el.idLeague))}>
                                <svg className="AllLeagues__icon--favorite icon">
                                    <use href={iconSprites + "#icon-soccer"} />
                                </svg>
                            </button>
                            <Link to={{pathname: `/allLeagues/${el.idLeague}`, state:{leagueName:el.strLeague}}}>View</Link>
                        </div>
                    )}
                )}
                <h2 className="AllLeagues__h2">Third Leagues:</h2>
                {getAllThirdDivisionLeagues.map(el => {
                    return (
                        <div key={shortid.generate()}>
                            <h3 className="AllLeagues__h3">{el.strLeague}</h3>
                            <img className="AllLeagues_badge" src={el.strBadge+"/preview"} alt="League Badge" />
                            <button onClick={() => dispatch(getFavoritedLeagues(el.strLeague, el.idLeague))}>
                                <svg className="AllLeagues__icon--favorite icon">
                                    <use href={iconSprites + "#icon-soccer"} />
                                </svg>
                            </button>
                            <Link to={{pathname: `/allLeagues/${el.idLeague}`, state:{leagueName:el.strLeague}}}>View</Link>
                        </div>
                    )}
                )}
                </React.Fragment>
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
    <div className="AllLeagues">
        <h1 className="AllLeagues_h1">Leagues</h1>
        {showData()}
    </div>
)
}

export default AllLeagues;