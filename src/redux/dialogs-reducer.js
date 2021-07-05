const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXTAREA_VALUE_MESSAGE = 'UPDATE-TEXTAREA-VALUE-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hello, I\'m Dmitry'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'This is not a clickable element, but it\'s an area of the pointer.'},
    ],
    dialogs: [
        {id: 1, name: 'Adrian'},
        {id: 2, name: 'Ann'},
        {id: 3, name: 'Oleg'},
        {id: 4, name: 'Liam'},
        {id: 5, name: 'William'},
        {id: 6, name: 'Mia'},
        {id: 7, name: 'Sophia'},
    ],
    textareaValueText: 'your message...'
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.textareaValueText,
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