export type UserType = {
    id: string
    followed: boolean
    name: string
    photos: {
        small: null
        large: null
    }
    status: string
}
type UserLocationType = {
    city: string
    country: string
}
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

type FollowAT = {
    type: "FOLLOW"
    userID: string
}
type UnFollowAT = {
    type: "UNFOLLOW"
    userID: string
}
type SetUsersAT = {
    type: "SET-USERS"
    users: Array<UserType>
}
type ActionType = FollowAT | UnFollowAT | SetUsersAT

export type UsersPageType = {
    users: Array<UserType>
}
const initialState: UsersPageType = {
    users: []
};

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: [...state.users.map((u) => u.id === action.userID ? {...u, followed: true } : {...u})]}
        }
        case UNFOLLOW:
            return {...state, users: [...state.users.map((u) => u.id === action.userID ? {...u, followed: false } : {...u})]}
        case SET_USERS:

            return {...state, users: [...state.users, ...action.users]}

        default:
            return state;
    }
};

export const followAC = (userID: string): FollowAT => ({type: FOLLOW, userID})
export const unFollowAC = (userID: string): UnFollowAT => ({type: UNFOLLOW, userID })
export const setUsersAC = (users: Array<UserType>): SetUsersAT => ({type: SET_USERS, users})
