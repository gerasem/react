import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={style.content}>
            <div className={style.imageFullWidth}>
                <img src="https://via.placeholder.com/900x300?text=Visit+Blogging.com+Now%20C/O%20https://placeholder.com/" />
            </div>
            <div className={style.avatar}>
                <img src="https://cdn.svgporn.com/logos/react.svg" />
            </div>

            <MyPosts />

        </div>
    )
}
export default Profile;
