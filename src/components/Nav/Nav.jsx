import style from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";
import StoreContext from "../../StoreContext";

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

export default Nav;
