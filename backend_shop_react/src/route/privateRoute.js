import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    let isLoggedIn = 1;
    return (
        <Route
            {...rest}
                render={props =>
                    isLoggedIn===1 ? (
                    <Component {...props} />
                    ) : (
                        <Component {...props} />
                )
            }
        />
    )
}

export default PrivateRoute
{/* <Redirect to={{ pathname: '/', state: { from: props.location } }} /> */}