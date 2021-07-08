import React from 'react'
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) // 4.5 -> 5

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <h1>Users</h1>
                {
                    this.props.users.map(u => <section key={u.id}>
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
                                                this.props.unfollow(u.id)
                                            }} type="button" className="nes-btn">Unfollow</button>
                                            : <button onClick={() => {
                                                this.props.follow(u.id)
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
                                    onClick={(e) => {this.onPageChanged(p)}}
                                    className={`nes-btn ${this.props.currentPage === p ? 'is-warning' : 'is-primary'}`}>{p}</button>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Users