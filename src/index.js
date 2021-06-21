import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, name: 'Hello World', likeCount: 0},
    {id: 2, name: 'Hi! How are you?', likeCount: 5},
    {id: 3, name: 'Its my first post', likeCount: 21},
]

let dialogs = [
    {id: 1, name: 'Adrian'},
    {id: 2, name: 'Ann'},
    {id: 3, name: 'Oleg'},
    {id: 4, name: 'Administrator'},
]

let messages = [
    {id: 1, message: 'Hello, I\'m Dmitry'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'This is not a clickable element, but it\'s an area of the pointer.'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
