import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <Post message='Hello World' />
            <Post message='Hi! How are you?' />
            <Post message='Its my first post' />
        </div>
    )
}
export default MyPosts;
