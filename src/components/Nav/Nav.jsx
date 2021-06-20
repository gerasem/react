import style from './Nav.module.css';

const Nav = () => {
    return (
        <aside className={`nes-container with-title is-centered ${style.aside}`}>
            <p className="title">Menu</p>
            <a className={`nes-btn ${style.item}`} href="/profile">Profile</a>
            <a className={`nes-btn ${style.item}`} href="/dialogs">Dialogs</a>
            <a className={`nes-btn ${style.item}`} href="#">Menu</a>
            <a className={`nes-btn ${style.item}`} href="#">Menu</a>
        </aside>
    )
}
export default Nav;
