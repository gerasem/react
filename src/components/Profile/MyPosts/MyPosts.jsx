import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.name} like={p.likeCount}/>)

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <section>
            <div className="columns">
                <div className="column-main">
                    <label htmlFor="textarea_field">Your message</label>
                    <textarea
                        id="textarea_field"
                        className="nes-textarea"
                        onChange={onPostChange}
                        value={props.newPost}
                    />
                </div>
                <div className={style.send}>
                    <button onClick={onAddPost} type="button" className="nes-btn is-primary">Send Message</button>
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
