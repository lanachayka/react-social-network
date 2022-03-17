import React, { Component } from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducer'
import { AppStateType } from '../../redux/reduxStore';

type MapStatePropsType = {
    isAuth: boolean,
    login: string | null
}

type MapDispatchPropsType = {
    logout: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
};

export default connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>(mapStateToProps, { logout })(HeaderContainer);


