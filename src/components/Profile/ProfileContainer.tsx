import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {ProfileUserType, SetProfileUserAC} from "../../redux/profile-reducer";


export class ProfileAPIContainer extends React.Component<ProfilePropsType, AppStateType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2 `)
            .then(response => {

                this.props.setProfileUser(response.data)
            });
    }

    render() {
        return <Profile
            profileUser={this.props.profileUser}
        />
    }
}


type MapStateToPropsType = {
    profileUser: ProfileUserType
};
type MapDispatchToPropsType = {
    setProfileUser: (profileUser: ProfileUserType) => void
};
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileUser: state.profilePage.profileUser
    };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setProfileUser: (profileUser: ProfileUserType) => {
            dispatch(SetProfileUserAC(profileUser))
        }
    }
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType;


export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPIContainer)

