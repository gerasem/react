import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, name: 'Hello World', likeCount: 0},
        {id: 2, name: 'Hi! How are you?', likeCount: 5},
        {id: 3, name: 'Its my first post', likeCount: 21},
    ]

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

                    <Post message={postsData[0].name} like={postsData[0].likeCount}/>

                </section>
            </section>
        </section>
    )
}
export default MyPosts;
