import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <section>
            <div className="columns">
                <div className="column-main">
                    <label htmlFor="textarea_field">You message</label>
                    <textarea id="textarea_field" className="nes-textarea"></textarea>
                </div>
                <div className={style.send}>
                    <button type="button" className="nes-btn is-primary">Send Message</button>
                </div>

            </div>
            <section className="nes-container with-title">
                <p className="title">Comments</p>
                <section className="message-list">
                    <Post message='Hello World' like='0'/>
                    <Post message='Hi! How are you?' like='5'/>
                    <Post message='Its my first post' like='20'/>
                </section>
            </section>


        </section>
    )
}
export default MyPosts;
