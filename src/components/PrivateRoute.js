  
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                if (localStorage.getItem("token")) {
                    // if token is in local storage, render the given component
                    return <Component />;
                } else {
                    return <Redirect to="/" />;
                }
            }}
        />
    );
};

export default PrivateRoute;