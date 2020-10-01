import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import  { allCountries }  from "../../actions/allCountries/allCountries";

const AllCountries = () => {
    const dispatch = useDispatch();
    const selectAllCountries = useSelector(state => state.allCountries);
    
    useEffect(() => {
        dispatch(allCountries());
    }, [dispatch])

    const showData = () => {
        if(!_.isEmpty(selectAllCountries.data)) {
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
        <br />
    </div>
)
}

export default AllCountries;
