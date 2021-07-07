import style from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";

const Nav = (props) => {
    let friendsElements = props.friends.map(d => <Friend key={d.id} avatar={d.photoUrl} name={d.name}/>)

    return (
        <aside className={`nes-container with-title is-centered ${style.aside}`}>
            <p className="title">Menu</p>
            <NavLink className={`nes-btn ${style.item}`} activeClassName={style.active}
                     to="/profile">Profile</NavLink>
            <NavLink className={`nes-btn ${style.item}`} activeClassName={style.active}
                     to="/dialogs">Dialogs</NavLink>
            <NavLink className={`nes-btn ${style.item}`} activeClassName={style.active}
                     to="/users">Users</NavLink>
            <div className={style.friendsBlock}>
                <h3>Friends</h3>
                <div className={style.friends}>
                    {friendsElements}
                </div>
            </div>
        </aside>
    )
}

export default Nav;
