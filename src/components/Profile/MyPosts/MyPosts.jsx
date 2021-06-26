import style from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.name} like={p.likeCount}/>)

    let newPostElement = React.createRef();

    let addNewPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return (
        <section>
            <div className="columns">
                <div className="column-main">
                    <label htmlFor="textarea_field">You message</label>
                    <textarea
                        id="textarea_field"
                        className="nes-textarea"
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPost}
                    />
                </div>
                <div className={style.send}>
                    <button onClick={addNewPost} type="button" className="nes-btn is-primary">Send Message</button>
                </div>
            </div>

            <section className="nes-container with-title">
                <p className="title">Comments</p>
                <section className="message-list">
                    {postsElements}
                </section>
            </section>
        </section>
    )
}
export default MyPosts;
