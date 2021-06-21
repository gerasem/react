import style from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.name} like={p.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <section>
            <div className="columns">
                <div className="column-main">
                    <label htmlFor="textarea_field">You message</label>
                    <textarea
                        id="textarea_field"
                        className="nes-textarea"
                        ref={newPostElement}>
                    </textarea>
                </div>
                <div className={style.send}>
                    <button onClick={addPost} type="button" className="nes-btn is-primary">Send Message</button>
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
