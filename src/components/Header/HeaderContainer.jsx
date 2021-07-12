import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {usersAPI as userAPI} from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
        userAPI.authMe().then(data => {
            let {id, email, login} = data.data //ToDO read more
            this.props.setAuthUserDataAC(id, email, login )
        })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);
