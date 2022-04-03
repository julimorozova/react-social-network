import {v1} from "uuid";


type ProfilePageType = {
    newPostText: string
    postsData: Array<PostsDataType>
    profileUser: ProfileUserType
};
type PostsDataType = {
    id: string
    message: string
    likesCount: number
};

export type ProfileUserType = {
    "aboutMe": string
    "contacts": {
        "facebook": string | null
        "website": null | string
        "vk": string | null
        "twitter": string | null
        "instagram": string | null
        "youtube": string | null
        "github": string | null
        "mainLink": string | null
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "userId": string
    "photos": {
        "small": string
        "large": string
    }
} | null

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE_USER = "SET_PROFILE_USER"

type AddPostAT = {
    type: "ADD-POST"
};
type UpdateNewPostTextAT = {
    type: "UPDATE-NEW-POST-TEXT"
    newPostText: string
};
type SetProfileUserAT = {
    type: 'SET_PROFILE_USER'
    profileUser: ProfileUserType
}

type ActionType = AddPostAT | UpdateNewPostTextAT | SetProfileUserAT;

const initialState: ProfilePageType = {
    newPostText: 'Hi!',
    postsData: [
        {id: "1", message: 'It is my first post', likesCount: 12},
        {id: "2", message: 'Hi, how are you?', likesCount: 13},
        {id: "3", message: 'You create cool app!', likesCount: 255}
    ],
    profileUser : null

};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    let copyState;

    switch (action.type) {
        case(ADD_POST): {
            copyState = {...state, postsData: [...state.postsData]};
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
            copyState = {...state};
            copyState.newPostText = action.newPostText;
            return copyState;
        }
        case(SET_PROFILE_USER): {
            return {...state, profileUser: action.profileUser}
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
export const SetProfileUserAC = (profileUser: ProfileUserType):SetProfileUserAT => ({type: SET_PROFILE_USER, profileUser})
