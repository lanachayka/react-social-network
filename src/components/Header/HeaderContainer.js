import React, { Component } from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer'
import { authAPI } from '../../api/api';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        authAPI.getAuthUserData()
            .then((data) => {
                if (data.resultCode === 0) {
                    const { id, email, login } = data.data
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);


