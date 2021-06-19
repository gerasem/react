import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.content}>
            <div className={style.imageFullWidth}>
                <img src="https://via.placeholder.com/900x300?text=Visit+Blogging.com+Now%20C/O%20https://placeholder.com/" />
            </div>
            <div className={style.avatar}>
                <img src="https://cdn.svgporn.com/logos/react.svg" />
            </div>

            <div className={style.item}>menu 1</div>
            <div className={style.item}>menu 2</div>

        </div>
    )
}
export default Profile;
