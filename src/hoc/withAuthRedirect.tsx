import React from 'react'
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { AppStateType } from '../redux/reduxStore';

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
} as MapPropsType);

type MapPropsType = {
    isAuth: boolean
}

type DispatchPropsType = {
}

function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {
    const RedirectComponent = (props: MapPropsType & DispatchPropsType) => {
        const { isAuth, ...restProps } = props
        return !isAuth
            ? <Redirect to="/login" />
            : <Component {...restProps as WCP} />
    }
    return connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(mapStateToProps, {})(RedirectComponent);
}

export default withAuthRedirect;