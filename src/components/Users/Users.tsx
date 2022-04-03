import React from "react";
import classes from "../Users/Users.module.css";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersPresentType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    isLoading: boolean
};
export const Users = (props: UsersPresentType) => {
        const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
        const pages = [];
        for(let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={classes.users}>
                {
                    props.users.map((u) =>
                        <div className={classes.user}
                            key={u.id}>
                            <div >
                                <div>
                                    <NavLink to={'/profile' + '/' + u.id}>
                                        <img className={classes.avatarFriend}
                                             src={u.photos.small != null ? u.photos.small : "data:image/png;base64,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"}
                                             alt=""/>
                                    </NavLink>/

                                </div>

                            </div>

                            <div className={classes.name}>{u.name}</div>
                            <div>{u.status}</div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}>Follow</button>}
                            </div>

                        </div>)
                }
                </div>
                { pages.map(p => {
                    return <div className={ p === props.currentPage ? `${classes.selected + " " + classes.pagination}` : `${classes.notSelected + " " + classes.pagination}`}
                                 onClick={()=> props.onPageChanged(p)}> { p } </div>;
                })}
            </div>
        );

};
