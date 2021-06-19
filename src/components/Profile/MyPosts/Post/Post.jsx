import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img className={style.image} src="https://via.placeholder.com/150" alt="" />
            {props.message}
        </div>
    )
}
export default Post;
