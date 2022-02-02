import classes from './Post.module.css'

export const Post = () => {
    return (
        <div className={classes.item}>
            <img className={classes.img}
                 src="https://avatars.mds.yandex.net/i?id=e708784c502029fd3580605e76109216_l-5761336-images-thumbs&n=27&h=384&w=480"
                 alt=""/>
            <span>post 1</span>
            <div><span>like</span></div>
        </div>
    )
}