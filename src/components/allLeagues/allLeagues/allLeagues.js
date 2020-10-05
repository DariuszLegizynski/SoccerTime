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

    // console.log(selectAllLeagues.data);

    let allCountriesArr = [];
    let allLeaguesFiltered = [];
    let getAllLeagues = [];

    // testArr = Object.values(selectAllLeagues.data);

    allCountriesArr = (Object.values(selectAllLeagues.data));
    
    // console.log(allLeaguesArr)

    if(allCountriesArr.length > 254){
        allLeaguesFiltered = allCountriesArr.flat().filter(el => el !== null);
        getAllLeagues = allLeaguesFiltered.flat();
        // for (let i of allLeaguesArr){
        //     console.log(i);
        // }
    }
    console.log(getAllLeagues.map(el => el.strLeague));

    // for (let i=0; i < selectAllLeagues.data.length; i++) {
    //     testArr = testArr.concat(selectAllLeagues.data.countrys);
    // }

    // if(!_.isEmpty(selectAllLeagues.data)) {
    //     for (let i in selectAllLeagues.data){
    //         console.log(i);
    //     }
    // }

    

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
            // console.log(Object.values(selectAllLeagues.data));
            
            // let testArray = [];
            // selectAllLeagues.data.countrys.map(el => testArray.push(el));
            // console.log(testArray);

            // for (let i of selectAllLeagues.data.countrys){
            //     return (
            //         <div key={shortid.generate()}>
            //             {i.strLeague}
            //         </div>
            //     )}
            // }
            // console.log(testArray = testArray.concat(selectAllLeagues.data.countrys));
            // return(
            //     <div>
            //         {selectAllLeagues.data.countrys.map(el => {
            //             return (
            //                 <div key={shortid.generate()}>
            //                     {el.strLeague}
            //                 </div>
            //             )}
            //         )}
            //     </div>
            // )
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
        {/* All Leagues: {showData()} */}
        <br />
        <br />
            allLeagues: {showData()}
        <br />
        <br />
    </div>
)
}

export default AllLeagues;
