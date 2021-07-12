import React from "react";
import Profile from "./Profile";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 2
        }

        usersAPI.getUser(userId).then(data => {
            this.props.setUserProfileAC(data)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfileAC})(WithUrlDataContainerComponent);
