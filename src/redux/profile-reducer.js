const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA_VALUE_PROFILE = 'UPDATE-TEXTAREA-VALUE-PROFILE';

let initialState = {
    posts: [
        {id: 1, name: 'Hello World', likeCount: 0},
        {id: 2, name: 'Hi! How are you?', likeCount: 5},
        {id: 3, name: 'Its my first post', likeCount: 21},
    ],
    textareaValueText: 'your message...'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                name: state.textareaValueText,
                likeCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.textareaValueText = ''
            return stateCopy
        }
        case UPDATE_TEXTAREA_VALUE_PROFILE: {
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.textareaValueText = action.newText
            return stateCopy
        }
    }

    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_TEXTAREA_VALUE_PROFILE, newText: text})

export default profileReducer