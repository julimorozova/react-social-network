import classes from './MyPosts.module.css';
import { Post } from "./Post/Post";
import {PostsDataType} from "../../../redux/store";
import React from "react";

type MyPostsPropsType = {
    newPostText: string
    postsData: Array<PostsDataType>
};

export const MyPosts: React.FC<MyPostsPropsType> = ({newPostText, postsData}) => {

    const postsElements = postsData.map(post => <Post message={post.message} likeCount={post.likesCount} />);
    return (
        <div className={classes.userPosts}>
            <h3>My Posts</h3>
            <textarea/>
            <button>Add post</button>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    );
};
