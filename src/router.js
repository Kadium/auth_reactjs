import React from "react";
import {Route, Redirect} from "react-router-dom";
import {ConnectedRouter} from "react-router-redux";
import {connect} from "react-redux";
import App from "./containers/App/App";
import asyncComponent from "./helpers/AsyncFunc";

const RestrictedRoute = ({component: Component, isLoggedIn, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/signin",
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
);
const PublicRoutes = ({history, isLoggedIn}) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <Route
                    exact
                    path={"/"}
                    component={asyncComponent(() => import("./containers/Page/signin/signin"))}
                />
                <Route
                    exact
                    path={"/404"}
                    component={asyncComponent(() => import("./containers/Page/404"))}
                />
                <Route
                    exact
                    path={"/500"}
                    component={asyncComponent(() => import("./containers/Page/500"))}
                />
                <Route
                    exact
                    path={"/signin"}
                    component={asyncComponent(() => import("./containers/Page/signin/signin"))}
                />
                <Route
                    exact
                    path={"/signupcustomer"}
                    component={asyncComponent(() => import("./containers/Page/signupCustomer/signupCustomer"))}
                />
                <Route
                    exact
                    path={"/signupowner"}
                    component={asyncComponent(() => import("./containers/Page/signupOwner/signupOwner"))}
                />
                <Route
                    exact
                    path={"/legalnotice"}
                    component={asyncComponent(() => import("./containers/Page/legalNotice/legalNotice"))}
                />
                <Route
                    exact
                    path={"/cgu"}
                    component={asyncComponent(() => import("./containers/Page/cgu/cgu"))}
                />
                <Route
                    exact
                    path={"/forgotpassword"}
                    component={asyncComponent(() =>
                        import("./containers/Page/forgotPassword")
                    )}
                />
                <Route
                    exact
                    path={"/resetpassword"}
                    component={asyncComponent(() =>
                        import("./containers/Page/resetPassword")
                    )}
                />
                <Route
                    exact
                    path={"/details"}
                    component={asyncComponent(() =>
                        import("./containers/Page/details")
                    )}
                />

                <RestrictedRoute
                    path="/app"
                    component={App}
                    isLoggedIn={isLoggedIn}
                />
            </div>
        </ConnectedRouter>
    );
};

export default connect(state => ({
    isLoggedIn: state.Auth.idToken !== null
}))(PublicRoutes);
