/*
import style from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";
import {connect} from "react-redux";
import MyPosts from "../Profile/MyPosts/MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";

const Nav = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let friendsElements = store.getState().sidebar.friends.map(d => <Friend name={d.name}/>)
                return (
                    <aside className={`nes-container with-title is-centered ${style.aside}`}>
                        <p className="title">Menu</p>
                        <NavLink className={`nes-btn ${style.item}`} activeClassName={style.active}
                                 to="/profile">Profile</NavLink>
                        <NavLink className={`nes-btn ${style.item}`} activeClassName={style.active}
                                 to="/dialogs">Dialogs</NavLink>
                        <div className={style.friendsBlock}>
                            <h3>Friends</h3>
                            <div className={style.friends}>
                                {friendsElements}
                            </div>
                        </div>
                    </aside>
                )
            }
            }
        </StoreContext.Consumer>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPost: state.profilePage.textareaValueText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
    }
}

const SuperNav = connect(mapStateToProps, mapDispatchToProps)(Nav)

export default Nav;
*/
