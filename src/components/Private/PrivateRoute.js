import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({component: Component, ...rest}) => {
    const auth = useSelector(state => state.auth.authenticated);

    return (
        <Route {...rest} render={
            (props) => {
                if(auth) {
                    return <Component {...props}/>
                } else {
                    return <Redirect to="/login" />
                }
            }
        } />
    )
}

export default PrivateRoute;