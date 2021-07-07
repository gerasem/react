const Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([{
            id: 1,
            photoUrl: '/avatar.jpg',
            followed: true,
            fullName: 'Alex',
            status: 'Hello world!',
            location: {city: 'Berlin', country: 'Germany'}
        },
            {
                id: 2,
                photoUrl: '/avatar.jpg',
                followed: false,
                fullName: 'Max',
                status: 'My status',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: '/avatar.jpg',
                followed: true,
                fullName: 'Andrew',
                status: 'I\'m boss',
                location: {city: 'Vienna', country: 'Austria'}
            },])
    }

    return (
        <div>
            <h1>Users</h1>
            {
                props.users.map(u => <section key={u.id}>
                        <div className="nes-container">
                            <div className="columns">
                                <div className="column">
                                    <img className="nes-avatar is-rounded is-large avatar" src={u.photoUrl}/>
                                </div>
                                <div className="column-main column-main-offset-left">
                                    <h3>{u.fullName}</h3>
                                    <p>{u.location.city}, {u.location.country}</p>
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