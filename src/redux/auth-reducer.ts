const SET_USER_DATA = "SET_USER_DATA"

type SetUserDataAT = {
    type: "SET_USER_DATA"
    data: AuthUserType
}
export type AuthUserType = {
    id: number
    email: string | null
    login: string | null
}
export type AuthType = {
    data: AuthUserType
    isAuth: boolean
}

type ActionType = SetUserDataAT

const initialState: AuthType = {
    data: {
        id: 0,
        email: null,
        login: null,
    },
    isAuth: false
}


export const authReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, data: {...action.data}, isAuth: true}
        default:
            return state
    }
}

export const setUserDataAC = ({id, email, login}: AuthUserType): SetUserDataAT => ({
    type: SET_USER_DATA,
    data: {id, email, login}
})
