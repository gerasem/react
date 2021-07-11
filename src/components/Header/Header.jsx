import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
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
                {props.isAuth ? <>Hello, <span className="nes-text is-primary">{props.login}</span>!</>
                    :<><NavLink className={`nes-text is-primary ${style.button}`} to={'/login'}>Login</NavLink>
                    <NavLink className={`nes-text is-success ${style.button}`} to={'/'}>Sign In</NavLink></>
                }
            </div>
        </header>
    )
}
export default Header;
