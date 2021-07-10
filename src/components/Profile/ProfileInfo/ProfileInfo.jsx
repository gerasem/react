import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import Friend from "../../Nav/Friend/Friend";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let user = props.profile;

    console.log(user.contacts)
    return (
        <div className="columns">
            <img className={`nes-avatar ${style.avatar}`} alt={user.fullName}
                 src={props.profile.photos.large}/>
            <div className="avatar-description">
                <h2 ><span className="nes-text is-primary">Name: </span>{user.fullName}</h2>
                <div><span className="nes-text is-primary">About Me: </span>{user.aboutMe}</div>
                {user.lookingForAJob &&
                <div>
                    <span className="nes-text is-primary">Looking for a job: </span>
                    {user.lookingForAJobDescription}<br/>
                </div>
                }
                <br/>
                <div className="lists">
                    <ul className="nes-list is-circle">
                        {Object.entries(user.contacts).map(([key, value]) => {
                            if(value) {
                                return (
                                    <li>
                                        <span className="nes-text is-disabled avatar-social">{key}</span>
                                        <span>{value}</span>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default ProfileInfo;