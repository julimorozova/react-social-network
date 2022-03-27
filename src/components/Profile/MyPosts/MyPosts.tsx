import classes from './MyPosts.module.css';
import { Post } from "./Post/Post";
import React, {ChangeEvent} from "react";
import {MyPostType} from "./MyPostsContainer";




export const MyPosts: React.FC<MyPostType> = ({profilePage, updateNewPostText, addNewPost}) => {

    const updatePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value);

    };
    const addPost = () => {
        addNewPost();
    };
    const postsElements = profilePage.postsData.map(post => <Post key={post.id} message={post.message} likeCount={post.likesCount} />);
    return (
        <div className={classes.userPosts}>
            <h3>My Posts</h3>
            <textarea
                value={profilePage.newPostText}
                onChange={(e) => updatePostText(e)}
            />
            <button onClick={addPost}>Add post</button>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    );
};
