export type UserType = {
    id: string
    followed: boolean
    name: string
    photos: {
        small: null
        large: null
    }
    status: string
};
type UserLocationType = {
    city: string
    country: string
};
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_LOADER = "TOGGLE_IS_LOADER";

type FollowAT = {
    type: "FOLLOW"
    userID: string
};
type UnFollowAT = {
    type: "UNFOLLOW"
    userID: string
};
type SetUsersAT = {
    type: "SET-USERS"
    users: Array<UserType>
};
type SetCurrentPageAT = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
};
type SetTotalUsersCountAT = {
    type: "SET_TOTAL_USERS_COUNT"
    totalUsersCount: number
};
type ToggleIsLoaderAT = {
    type: "TOGGLE_IS_LOADER"
    isLoading: boolean
};
type ActionType = FollowAT | UnFollowAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT | ToggleIsLoaderAT;

export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
};
const initialState: UsersPageType = {
    users: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true
};

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: [...state.users.map((u) => u.id === action.userID ? {...u, followed: true } : {...u})]};
        }
        case UNFOLLOW:
            return {...state, users: [...state.users.map((u) => u.id === action.userID ? {...u, followed: false } : {...u})]};
        case SET_USERS:
            return {...state, users: [...action.users]};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};
        case TOGGLE_IS_LOADER:
            return {...state, isLoading: action.isLoading};

        default:
            return state;
    }
};

export const followAC = (userID: string): FollowAT => ({type: FOLLOW, userID});
export const unFollowAC = (userID: string): UnFollowAT => ({type: UNFOLLOW, userID });
export const setUsersAC = (users: Array<UserType>): SetUsersAT => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage: number): SetCurrentPageAT => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountAT => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsLoadingAC = (isLoading: boolean): ToggleIsLoaderAT => ({type: TOGGLE_IS_LOADER, isLoading});
