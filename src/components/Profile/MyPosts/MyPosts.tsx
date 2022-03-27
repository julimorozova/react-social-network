import classes from './MyPosts.module.css';
import { Post } from "./Post/Post";
import {
    ActionType,
    PostsDataType,
} from "../../../redux/store";
import React, {ChangeEvent} from "react";
import {AddPostAC, UpdatePostTextAC} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    newPostText: string
    postsData: Array<PostsDataType>
    updateNewPostText: (text: string) => void
    addNewPost: () => void
};

export const MyPosts: React.FC<MyPostsPropsType> = ({newPostText, postsData, updateNewPostText, addNewPost}) => {

    const updatePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value);

    };
    const addPost = () => {
        addNewPost();
    };
    const postsElements = postsData.map(post => <Post message={post.message} likeCount={post.likesCount} />);
    return (
        <div className={classes.userPosts}>
            <h3>My Posts</h3>
            <textarea
                value={newPostText}
                onChange={(e) => updatePostText(e)}
            />
            <button onClick={addPost}>Add post</button>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    );
};
