import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateTextareaValueMessage, updateTextareaValueProfile} from './redux/state';

export let renderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={props}
                addPost={addPost}
                updateNewPostText={updateTextareaValueProfile}
                addMessage={addMessage}
                updateNewMessageText={updateTextareaValueMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}