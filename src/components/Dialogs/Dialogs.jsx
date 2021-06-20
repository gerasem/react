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

    let dialogsData = [
        {id: 1, name: 'Adrian'},
        {id: 2, name: 'Ann'},
        {id: 3, name: 'Oleg'},
        {id: 4, name: 'Administrator'},
    ]

    let messagesData = [
        {id: 1, message: 'Hello, I\'m Dmitry'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'This is not a clickable element, but it\'s an area of the pointer.'},
    ]

    return (
        <div className="columns">
            <div className={style.dialogs}>
                <div className="nes-container is-dark with-title">
                    <p className="title">Dialogs</p>
                    <div className="lists">
                        <ul className={`nes-list is-disc ${style.dialog}`}>

                            <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="column-main column-main-offset-left">
                <div className="nes-container with-title">
                    <p className="title">Message</p>

                    <Message message={messagesData[0].message}/>

                </div>

            </div>
        </div>
    )
}
export default Dialogs;
