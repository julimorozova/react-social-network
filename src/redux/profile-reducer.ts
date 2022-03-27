import {ActionType, AddPostAT, UpdateNewPostTextAT} from "./store";
import {v1} from "uuid";

type ProfilePageType = {
    newPostText: string
    postsData: Array<PostsDataType>
};
type PostsDataType = {
    id: string
    message: string
    likesCount: number
};

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


const initialState: ProfilePageType = {
    newPostText: 'Hi!',
    postsData: [
        {id: "1", message: 'It is my first post', likesCount: 12},
        {id: "2", message: 'Hi, how are you?', likesCount: 13},
        {id: "3", message: 'You create cool app!', likesCount: 255}
    ],
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    let copyState;

    switch (action.type) {
        case(ADD_POST): {
            copyState = {...state, postsData: [...state.postsData]}
            const newPost: PostsDataType = {
                id: v1(),
                message: copyState.newPostText,
                likesCount: 0
            };
            copyState.postsData.push(newPost);
            copyState.newPostText = '';
            return copyState;
        }
        case(UPDATE_NEW_POST_TEXT): {
            copyState = {...state}
            copyState.newPostText = action.newPostText;
            return copyState;
        }
        default:
            return state;
    }
};

export const AddPostAC = (): AddPostAT => ({type: ADD_POST});
export const UpdatePostTextAC = (newPostText: string): UpdateNewPostTextAT => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText
});
