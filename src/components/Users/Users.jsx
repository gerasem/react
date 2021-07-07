import * as axios from "axios";

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <div>
            <h1>Users</h1>
            {
                props.users.map(u => <section key={u.id}>
                        <div className="nes-container">
                            <div className="columns">
                                <div className="column">
                                    <img className="nes-avatar is-rounded is-large avatar"
                                         src={u.photos.small != null ? u.photos.small : process.env.PUBLIC_URL + '/avatar.jpg'}/>
                                </div>
                                <div className="column-main column-main-offset-left">
                                    <h3>{u.name}</h3>
                                    <p>{"u.location.city"}, {"u.location.country"}</p>
                                    <span className="nes-text is-disabled">{u.status}</span>
                                </div>
                                <div className="column">
                                    {u.followed
                                        ? <button onClick={() => {
                                            props.unfollow(u.id)
                                        }} type="button" className="nes-btn">Unfollow</button>
                                        : <button onClick={() => {
                                            props.follow(u.id)
                                        }} type="button" className="nes-btn is-primary">Follow</button>
                                    }
                                </div>
                            </div>

                        </div>
                    </section>
                )
            }


        </div>
    )
}

export default Users