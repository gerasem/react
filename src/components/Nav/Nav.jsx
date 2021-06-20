import style from './Nav.module.css';

const Nav = () => {
    return (
        <aside className={`nes-container with-title is-centered ${style.aside}`}>
            <p className="title">Menu</p>
            <a className={`nes-btn ${style.item}`} href="#">Main Page</a>
            <a className={`nes-btn ${style.item}`} href="#">Menu</a>
            <a className={`nes-btn ${style.item}`} href="#">Menu</a>
            <a className={`nes-btn ${style.item}`} href="#">Menu</a>
        </aside>
    )
}
export default Nav;
