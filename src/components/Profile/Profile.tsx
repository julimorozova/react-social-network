import classes from './Profile.module.css'
import { MyPosts } from "./MyPosts/MyPosts";

export const Profile = () => {
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
            <MyPosts />
        </div>
    )
}