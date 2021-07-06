import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div>
            <div className="nes-container with-title">
                <p className="title">About me</p>
                <ProfileInfo/>
            </div>

            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
