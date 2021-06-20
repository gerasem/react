import style from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <aside className={`nes-container with-title is-centered ${style.aside}`}>
            <p className="title">Menu</p>
            <NavLink className={`nes-btn ${style.item}`} activeClassName={style.active} to="/profile">Profile</NavLink>
            <NavLink className={`nes-btn ${style.item}`} activeClassName={style.active} to="/dialogs">Dialogs</NavLink>
        </aside>
    )
}
export default Nav;
