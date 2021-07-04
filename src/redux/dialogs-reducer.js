const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXTAREA_VALUE_MESSAGE = 'UPDATE-TEXTAREA-VALUE-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                name: state.textareaValueText,
            }
            state.messages.push(newMessage);
            state.textareaValueText = '';
            break;
        case UPDATE_TEXTAREA_VALUE_MESSAGE:
            state.textareaValueText = action.newText;
            break;
    }

    return state;
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_TEXTAREA_VALUE_MESSAGE, newText: text})

export default dialogsReducer