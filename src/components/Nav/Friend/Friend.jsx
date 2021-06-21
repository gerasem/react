import style from './../Nav.module.css';

const Friend = (props) => {
    return (
        <a href="#" className={style.friend}>
            <img className="nes-avatar is-rounded is-large" alt="Gravatar image example"
                 src="https://www.gravatar.com/avatar?s=15"/>
            <span>{props.name}</span>
        </a>
    )
}
export default Friend;