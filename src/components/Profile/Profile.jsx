import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <div className="nes-container with-title">
                <p className="title">About me</p>
                <ProfileInfo/>
            </div>

            <MyPostsContainer store={props.store}/>
        </div>
    )
}
export default Profile;
