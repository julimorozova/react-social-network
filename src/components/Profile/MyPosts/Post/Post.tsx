import classes from './Post.module.css';
import React from "react";
type PostType = {
    message: string
    likeCount: number
};
export const Post: React.FC<PostType> = ({
    message,
    likeCount
    }) => {
    return (
        <>
        <div className={classes.item}>
            <img className={classes.img}
                 src="https://avatars.mds.yandex.net/i?id=e708784c502029fd3580605e76109216_l-5761336-images-thumbs&n=27&h=384&w=480"
                 alt=""/>
            <span>{message}</span>

        </div>
        <div className={classes.like}><span>{likeCount} like</span></div>
        </>
    );
};