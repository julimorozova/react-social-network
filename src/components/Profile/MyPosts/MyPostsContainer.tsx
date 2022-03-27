import classes from './MyPosts.module.css';
import { Post } from "./Post/Post";
import {
    ActionType,
    PostsDataType,
} from "../../../redux/store";
import React, {ChangeEvent} from "react";
import {AddPostAC, UpdatePostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerPropsType = {
    newPostText: string
    postsData: Array<PostsDataType>
    dispatch: (action: ActionType) => void
};


export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = ({newPostText, postsData, dispatch}) => {

    const updateNewPostText = (text: string) => {
        dispatch(UpdatePostTextAC(text));

    };
    const addNewPost = () => {
        dispatch(AddPostAC());
    };
    const postsElements = postsData.map(post => <Post message={post.message} likeCount={post.likesCount} />);
    return (
        <MyPosts
            newPostText={newPostText}
            postsData={postsData}
            updateNewPostText={updateNewPostText}
            addNewPost={addNewPost}

        />
    );
};
