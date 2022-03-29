import React from "react";
import {UsersType} from "./UsersContainer";
import classes from "../Profile/Profile.module.css";
import {v1} from "uuid";
import axios from 'axios'

export const Users: React.FC<UsersType> = ({users, setUsers, unfollow, follow}) => {
    const getUsers =  () => {
        if (users.length === 0) {
            let c = 1
            console.log(c++)
            console.log(users)
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => setUsers(response.data.items))
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                users.map((u) =>
                    <div
                        key={u.id}>
                    <div >
                        <div>
                            <img className={classes.avatarFriend}
                                 src="https://avatars.mds.yandex.net/i?id=e708784c502029fd3580605e76109216_l-5761336-images-thumbs&n=27&h=384&w=480"
                                 alt=""/>
                        </div>
                        <div>

                          {u.followed
                              ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                              : <button onClick={() => follow(u.id)}>Follow</button>}
                        </div>
                    </div>

                    <div>{u.name}</div>
                    <div>{u.status}</div>

                </div>)
            }
        </div>
    )
}
