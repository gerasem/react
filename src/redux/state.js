let state = {
    profilePage: {
        posts: [
            {id: 1, name: 'Hello World', likeCount: 0},
            {id: 2, name: 'Hi! How are you?', likeCount: 5},
            {id: 3, name: 'Its my first post', likeCount: 21},
        ],
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
    },
    sidebar: {
        friends: [
            {id: 1, name: 'John'},
            {id: 2, name: 'Olivia'},
            {id: 3, name: 'Noah'},
            {id: 4, name: 'Charlotte'},
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        name: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost);
}

export default state;