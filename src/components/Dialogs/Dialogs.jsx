import style from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";

const Dialogs = (props) => {

    // for each dialogs element - <DialogItem /> tag
    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    return (
        <div className="columns">
            <div className={style.dialogs}>
                <div className="nes-container is-dark with-title">
                    <p className="title">Dialogs</p>
                    <div className="lists">
                        <ul className={`nes-list is-disc ${style.dialog}`}>
                            {dialogsElements}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="column-main column-main-offset-left">
                <div className="nes-container with-title">
                    <p className="title">Message</p>
                    {messagesElements}
                    <div className="columns">
                        <div className="column-main">
                            <label htmlFor="textarea_field">You message</label>
                            <textarea
                                id="textarea_field"
                                className="nes-textarea"
                                ref={newMessageElement}>
                    </textarea>
                        </div>
                        <div className={style.send}>
                            <button onClick={addMessage} type="button" className="nes-btn is-primary">Send Message
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dialogs;
