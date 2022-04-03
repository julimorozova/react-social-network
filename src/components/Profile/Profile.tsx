import classes from './Profile.module.css';
import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../redux/profile-reducer";
import {Loader} from "../common/Loader/Loader";

type ProfilePresentType = {
    profileUser: ProfileUserType
}

export const Profile: React.FC<ProfilePresentType> = ({profileUser}) => {
    if(!profileUser) {
        return <Loader/>
    }


    return (
        <div className={classes.profile}>

            <img className={classes.img}
                 src={profileUser.photos.large}
                 alt=""/>
            <h3 className={classes.aboutUser}>
                <div>{profileUser.fullName}</div>
                <div>{profileUser.aboutMe}</div>
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
