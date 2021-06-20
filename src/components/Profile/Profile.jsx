import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className="column-main">
            {/*<div className={style.image}>*/}
            {/*    <img*/}
            {/*        src="https://via.placeholder.com/900x300?text=My-First-React-App"/>*/}
            {/*</div>*/}
            {/*<section>*/}
                <div className="nes-container with-title">
                    <p className="title">About me</p>
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
                </div>
            {/*</section>*/}


            <MyPosts/>

        </div>
    )
}
export default Profile;
