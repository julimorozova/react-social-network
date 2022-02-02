import classes from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={classes.profile}>

            <img className={classes.img}
                 src="https://avatars.mds.yandex.net/i?id=e708784c502029fd3580605e76109216_l-5761336-images-thumbs&n=27&h=384&w=480"
                 alt=""/>
            <div className={classes.aboutUser}>
                User User
            </div>

            <div className={classes.userFriends}>
                <div>My Friends</div>
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
            <div className={classes.userPosts}>
                <textarea/>
                <button>Add post</button>
            </div>
        </div>
    )
}