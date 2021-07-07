import style from './../Nav.module.css';

const Friend = (props) => {
    return (
        <a href="#" className={style.friend}>
            <img className={"nes-avatar is-rounded is-large avatar"} alt="Gravatar image example"
                 src={props.avatar}/>
            <span>{props.name}</span>
        </a>
    )
}
export default Friend;