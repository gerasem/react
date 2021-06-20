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

    let dialogs = [
        {id: 1, name: 'Adrian'},
        {id: 2, name: 'Ann'},
        {id: 3, name: 'Oleg'},
        {id: 4, name: 'Administrator'},
    ]

    let messages = [
        {id: 1, message: 'Hello, I\'m Dmitry'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'This is not a clickable element, but it\'s an area of the pointer.'},
    ]

    // for each dialogs element - <DialogItem /> tag
    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className="columns">
            <div className={style.dialogs}>
                <div className="nes-container is-dark with-title">
                    <p className="title">Dialogs</p>
                    <div className="lists">
                        <ul className={`nes-list is-disc ${style.dialog}`}>
                            { dialogsElements }
                        </ul>
                    </div>
                </div>
            </div>

            <div className="column-main column-main-offset-left">
                <div className="nes-container with-title">
                    <p className="title">Message</p>
                    { messagesElements }
                </div>

            </div>
        </div>
    )
}
export default Dialogs;
