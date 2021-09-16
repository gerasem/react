import style from './../Nav.module.css';

const Friend = (props) => {
    return (
        <span className={style.friend}>
            <img className={"nes-avatar is-rounded is-large avatar"} alt={props.name}
                 src={props.avatar}/>
            <span>{props.name}</span>
        </span>
    )
}
export default Friend;