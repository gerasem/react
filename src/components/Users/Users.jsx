import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) // 4.5 -> 5

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <h1>Users <small>(total: {props.totalUsersCount})</small></h1>
            {
                props.users.map(u => <section key={u.id}>
                        <div className="nes-container">
                            <div className="columns">
                                <div className="column">
                                    <NavLink to={'/profile/' + u.id}>
                                        <img className="nes-avatar is-rounded is-large avatar"
                                             src={u.photos.small != null ? u.photos.small : process.env.PUBLIC_URL + '/avatar.jpg'}/>
                                    </NavLink>
                                </div>
                                <div className="column-main column-main-offset-left">
                                    <h3>{u.name}</h3>
                                    <span className="nes-text is-disabled">{u.status}</span>
                                </div>
                                <div className="column">
                                    {u.followed
                                        ? <button onClick={() => {
                                            usersAPI.follow(u.id).then(id => {
                                                props.unfollow(id)
                                            })
                                        }} type="button" className="nes-btn">Unfollow</button>
                                        : <button onClick={() => {
                                            usersAPI.unfollow(u.id).then(id => {
                                                props.follow(id)
                                            })
                                        }} type="button" className="nes-btn is-primary">Follow</button>
                                    }
                                </div>
                            </div>

                        </div>
                    </section>
                )
            }

            <div>
                {pages.map(p => {
                    return (
                        <button type="button"
                                onClick={(e) => {
                                    props.onPageChanged(p)
                                }}
                                className={`nes-btn paginator ${props.currentPage === p ? 'is-warning' : 'is-primary'}`}>{p}</button>
                    )
                })}
            </div>
        </div>
    )

}

export default Users