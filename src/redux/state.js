let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, name: 'Hello World', likeCount: 0},
                {id: 2, name: 'Hi! How are you?', likeCount: 5},
                {id: 3, name: 'Its my first post', likeCount: 21},
            ],
            textareaValueText: 'your message...'
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'John'},
                {id: 2, name: 'Olivia'},
                {id: 3, name: 'Noah'},
                {id: 4, name: 'Charlotte'},
            ]
        }
    },
    _callSubscriber() {
        console.log("do not use this function");
    },
    getState() {
        return this._state;
    },
    dispatch(action) { // example: type: 'ADD-POST'
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                name: this._state.profilePage.textareaValueText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.textareaValueText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-TEXTAREA-VALUE-PROFILE') {
            this._state.profilePage.textareaValueText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                name: this._state.dialogsPage.textareaValueText,
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.textareaValueText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-TEXTAREA-VALUE-MESSAGE'){
            this._state.dialogsPage.textareaValueText = action.newText;
            this._callSubscriber(this._state);
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.store = store;
export default store;