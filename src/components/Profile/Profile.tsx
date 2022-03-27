import classes from './Profile.module.css';
import {ActionType, ProfilePageType} from "../../redux/store";
import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePagePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
};

export const Profile: React.FC<ProfilePagePropsType> = ({profilePage, dispatch}) => {
    return (
        <div className={classes.profile}>

            <img className={classes.img}
                 src="https://avatars.mds.yandex.net/i?id=e708784c502029fd3580605e76109216_l-5761336-images-thumbs&n=27&h=384&w=480"
                 alt=""/>
            <h3 className={classes.aboutUser}>
                User User
            </h3>

            <div className={classes.userFriends}>
                <h3>My Friends</h3>
                <div>
                    <img className={classes.avatarFriend}
                         src="https://avatars.mds.yandex.net/i?id=e708784c502029fd3580605e76109216_l-5761336-images-thumbs&n=27&h=384&w=480"
                         alt=""/>
                    <img className={classes.avatarFriend}
                         src="https://avatars.mds.yandex.net/i?id=e708784c502029fd3580605e76109216_l-5761336-images-thumbs&n=27&h=384&w=480"
                         alt=""/>
                    <img className={classes.avatarFriend}
                         src="https://avatars.mds.yandex.net/i?id=e708784c502029fd3580605e76109216_l-5761336-images-thumbs&n=27&h=384&w=480"
                         alt=""/>
                </div>
            </div>

            <MyPostsContainer/>
        </div>
    );
};
