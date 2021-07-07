import {connect} from "react-redux";
import Nav from "./Nav";

const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends,
    }
}

const NavContainer = connect(mapStateToProps)(Nav)

export default NavContainer
