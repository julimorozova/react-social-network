import {
   ProfilePageType
} from "../../../redux/store";
import React from "react";
import {AddPostAC, UpdatePostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import { Dispatch } from "redux";


type MapStateToPropsType = {
    profilePage: ProfilePageType
};
type MapDispatchToPropsType = {
    addNewPost: () => void
    updateNewPostText: (text: string) => void
};
export type MyPostType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType  => {
    return {
        profilePage: state.profilePage
    };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addNewPost: () => { dispatch(AddPostAC());},
        updateNewPostText: (text: string) => { dispatch(UpdatePostTextAC(text)); }
    };
};
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
