import style from './Post.module.css';

const Post = (props) => {
    return (
        <section className={`message -left ${style.message}`}>
            <i className="nes-bcrikko"></i>
            <div className={`nes-balloon from-left ${style.item}`}>
                <p>{props.message}</p>
            </div>
            <i className="nes-icon is-medium like"></i>
            <span className={style.likeCount}>
                {props.like}
            </span>
        </section>
    )
}
export default Post;
