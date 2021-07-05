import style from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.textareaValueText

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
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
                            <label htmlFor="textarea_field">Your message</label>
                            <textarea
                                id="textarea_field"
                                className="nes-textarea"
                                // ref={newMessageElement}
                                onChange={onMessageChange}
                                value={newMessageBody}/>

                        </div>
                        <div className={style.send}>
                            <button onClick={onSendMessageClick} type="button" className="nes-btn is-primary">Send Message
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dialogs;
