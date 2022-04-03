import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {ProfileUserType, SetProfileUserAC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {toggleIsLoadingAC} from "../../redux/users-reducer";
import {Loader} from "../common/Loader/Loader";


export class ProfileAPIContainer extends React.Component<ProfilePropsType & RouteComponentProps<{ userId: string }>, { userId: string }> {

    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId ) {
            userId = this.props.id
        }
        this.props.toggleIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setProfileUser(response.data)
                this.props.toggleIsLoading(false)
            });
    }

    render() {
        return (
            <>
            {
                this.props.isLoading
                    ? <Loader/>
                    : <Profile
                        profileUser={this.props.profileUser}
                    />
            }

            </>
        )
    }
}


type MapStateToPropsType = {
    profileUser: ProfileUserType
    isLoading: boolean
    id: number
};
type MapDispatchToPropsType = {
    setProfileUser: (profileUser: ProfileUserType) => void
    toggleIsLoading: (isLoading: boolean) => void
};
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileUser: state.profilePage.profileUser,
        isLoading: state.profilePage.isLoading,
        id: state.auth.data.id
    };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setProfileUser: (profileUser: ProfileUserType) => {
            dispatch(SetProfileUserAC(profileUser))
        },
        toggleIsLoading: (isLoading: boolean) => {
            dispatch(toggleIsLoadingAC(isLoading));
        }
    }
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType;

const WithRouterComponent = withRouter(ProfileAPIContainer)
export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterComponent)

