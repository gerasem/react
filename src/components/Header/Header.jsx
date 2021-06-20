import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="columns">
            <div className="column-main">
                <NavLink to="/profile">
                    <h2>
                        <i className={`nes-jp-logo brand-logo ${style.logo}`}></i>
                        React App Demo
                    </h2>
                </NavLink>

            </div>
            <div className={style.buttons}>
                <a className={`nes-text is-primary ${style.button}`} href="#">Login</a>
                <a className={`nes-text is-success ${style.button}`} href="#">Sign In</a>
            </div>
        </header>
    )
}
export default Header;
