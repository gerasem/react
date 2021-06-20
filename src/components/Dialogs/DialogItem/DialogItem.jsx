import {NavLink} from "react-router-dom";
import style from "../Dialogs.module.css";

const DialogItem = (props) => {
    return (
        <li>
            <NavLink activeClassName={style.active} to={"dialogs/" + props.id}>{props.name}</NavLink>
        </li>
    )
}

export default DialogItem;