import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className="columns">
            <img className={`nes-avatar ${style.avatar}`} alt="Gravatar image example"
                 src="https://cdn.svgporn.com/logos/react.svg" />
            <div className="lists">
                <ul className="nes-list is-disc">
                    <li>My Name</li>
                    <li>Age</li>
                    <li>City</li>
                    <li>Country</li>
                </ul>
            </div>
        </div>
    )
}
export default ProfileInfo;