import React from 'react'
import { Redirect } from "react-router";
import { connect } from "react-redux";

const withAuthRedirect = (Component) => {

    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth,
        };
    };

    const RedirectComponent = (props) => {
        return !props.isAuth
            ? <Redirect to="/login" />
            : <Component {...props} />
    }
    return connect(mapStateToProps)(RedirectComponent);
}

export default withAuthRedirect;