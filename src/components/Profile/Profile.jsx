import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
{/*            <div className={style.image}>
                <img
                    src="https://via.placeholder.com/900x300?text=My-First-React-App"/>
            </div>
            <section>*/}
                <div className="nes-container with-title">
                    <p className="title">About me</p>
                    <ProfileInfo />
                </div>
            {/*</section>*/}
            <MyPosts
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
                newPost={props.profilePage.textareaValueText}
            />
        </div>
    )
}
export default Profile;
