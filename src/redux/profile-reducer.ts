import {ActionType, AddPostAT, PostsDataType, ProfilePageType, UpdateNewPostTextAT} from "./store";

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

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case(ADD_POST): {
            const newPost: PostsDataType = {
                id: "4",
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        }
        case(UPDATE_NEW_POST_TEXT):
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
};

export const AddPostAC = (): AddPostAT => ({type: ADD_POST});
export const UpdatePostTextAC = (newPostText: string): UpdateNewPostTextAT => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText
});
