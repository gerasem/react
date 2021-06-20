import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li>
            <NavLink activeClassName={style.active} to={"dialogs/" + props.id}>{props.name}</NavLink>
        </li>
    )
}

const Message = (props) => {
    return (
        <p className="nes-balloon from-left nes-pointer">
            {props.message}
        </p>
    )
}

const Dialogs = () => {
    return (
        <div className="columns">
            <div className={style.dialogs}>
                <div className="nes-container is-dark with-title">
                    <p className="title">Dialogs</p>
                    <div className="lists">
                        <ul className={`nes-list is-disc ${style.dialog}`}>
                            <DialogItem id="1" name="Adrian"/>
                            <DialogItem id="2" name="Ann"/>
                            <DialogItem id="3" name="Oleg"/>
                            <DialogItem id="4" name="Administrator"/>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="column-main column-main-offset-left">
                <div className="nes-container with-title">
                    <p className="title">Message</p>
                    <Message message="Hello, I'm Dmitry" />
                    <Message message="How are you?" />
                    <Message message="This is not a clickable element, but it's an area of the pointer." />
                </div>

            </div>
        </div>
    )
}
export default Dialogs;
