import {Header} from "./Header";
import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import { AuthUserType, setUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


class HeaderContainer extends React.Component<HeaderType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    console.log(response.data.data)
                    const {id, login, email} = response.data.data
                    this.props.setUserData({id, email, login})

                    console.log({id, email, login})

                }
            });
    }

    render() {
        return <Header
            login={this.props.login}
            isAuth={this.props.isAuth}
        />
    }
}

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setUserData: (data: AuthUserType) => void
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.auth.data.login,
        isAuth: state.auth.isAuth
    }

}
const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUserData: (data: AuthUserType) => {
            dispatch(setUserDataAC(data))
        }
    }

}
type HeaderType = MapStateToPropsType & MapDispatchToPropsType

export default connect(MapStateToProps,MapDispatchToProps)(HeaderContainer)
