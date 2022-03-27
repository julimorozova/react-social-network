export type UserType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: UserLocationType
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
type SetUsersType = {
    type: "SET-USERS"
    users: Array<UserType>
}
type ActionType = FollowAT | UnFollowAT | SetUsersType

export type InitialStateType = {
    users: Array<UserType>
}
const initialState: InitialStateType  = {
    users: [
        {id: "1",followed: true, fullName: "Mark Ivanov", status: "Good", location: {city: "Moscow", country: "Russia"}},
        {id: "2", followed: false, fullName: "Artem Rit", status: "I'm fine", location: {city: "Moscow", country: "Russia"}}
    ]
};

export const usersReducer = (state: InitialStateType = initialState, action: ActionType) => {
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
export const setUsersAC = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users})
