import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import _ from "lodash";
import shortid from "shortid";

import  { allLeagues }  from "../../../actions/leagues/allLeagues/allLeagues";
import  { allCountries }  from "../../../actions/allCountries/allCountries";
import { getFavoritedLeagues } from "../../../actions/favorites/getFavoritedLeagues";

//styles
import "./AllLeagues.css";
import iconSprites from "../../../resources/icons/icomoon/sprite.svg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import video from "../../../resources/video/football.mp4"

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

    const sliderSettings =  {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive:
        [
            {
            breakpoint: 1024,
            settings:
                {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
            breakpoint: 600,
            settings:
                {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
            breakpoint: 480,
            settings:
                {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    }

    const showData = () => {
        if(!_.isEmpty(selectAllLeagues.data)) {
            return (
                <React.Fragment>
                <h2 className="AllLeagues__h2">Most Favorited Leagues:</h2>
                    <Slider {...sliderSettings}>
                        {getAllZeroDivisionLeagues.map(el => {
                            return (
                                <div key={shortid.generate()} className="AllLeagues__card">
                                    <h3 className="AllLeagues__h3">{el.strLeague}</h3>
                                    <img className="AllLeagues_badge" src={el.strBadge+"/preview"} alt="League Badge" />
                                    <p>{el.strDescritpionEN}</p>
                                    <button onClick={() => dispatch(getFavoritedLeagues(el.strLeague, el.idLeague))}>
                                        <svg className="AllLeagues__icon--favorite icon">
                                            <use href={iconSprites + "#icon-soccer"} />
                                        </svg>
                                    </button>
                                    <Link to={{pathname: `/allLeagues/${el.idLeague}`, state:{leagueName: el.strLeague}}}>View</Link>
                                </div>
                            )}
                        )}
                    </Slider>
                <h2 className="AllLeagues__h2">First Leagues:</h2>
                <Slider {...sliderSettings}>
                    {getAllFirstDivisionLeagues.map(el => {
                        return (
                            <div key={shortid.generate()} className="AllLeagues__card">
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
                </Slider>
                <h2 className="AllLeagues__h2">Second Leagues:</h2>
                <Slider {...sliderSettings}>
                    {getAllSecondDivisionLeagues.map(el => {
                        return (
                            <div key={shortid.generate()} className="AllLeagues__card">
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
                </Slider>
                <h2 className="AllLeagues__h2">Third Leagues:</h2>
                <Slider {...sliderSettings}>
                    {getAllThirdDivisionLeagues.map(el => {
                        return (
                            <div key={shortid.generate()} className="AllLeagues__card">
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
                </Slider>
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

    // const playVideo = () => {
    //     return (
    //         <video autoPlay muted loop className="introVideo">
    //             <source src={video} type="video/mp4" />
    //         </video>
    //     )
    // }

return (
    <main className="AllLeagues">
        {/* {playVideo()} */}
        <div className="AllLeagues__h1">
            <h1 className="h1">Leagues</h1>
        </div>
        {showData()}
    </main>
)
}

export default AllLeagues;