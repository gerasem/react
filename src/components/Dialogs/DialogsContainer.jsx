import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage

                let onSendMessageClick = () => {
                    store.dispatch(addMessageActionCreator())
                }

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }
                return <Dialogs
                    updateNewMessageText={onMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}
                />
            }
            }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;
