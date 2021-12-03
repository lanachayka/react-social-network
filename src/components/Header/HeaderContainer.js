import React, { Component } from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { getAuth, logout } from '../../redux/authReducer'

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getAuth();
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

export default connect(mapStateToProps, { getAuth, logout })(HeaderContainer);


