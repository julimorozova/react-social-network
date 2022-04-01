import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsLoadingAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import loader from './loader.svg';

import React from "react";
import axios from "axios";

export class UsersApiComponent extends React.Component<UsersType, AppStateType> {
    componentDidMount() {
        this.props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {

                this.props.setUsers(response.data.items);
                this.props.toggleIsLoading(false);
            });
    };

    render() {
        return <div>
            {this.props.isLoading ? <img style={{marginLeft: 500}} src={loader} alt="logo"/> : null }

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                isLoading={this.props.isLoading}
            />
        </div>;
    }
}

export type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
};
export type MapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsLoading: (isLoading: boolean) => void
};
export type UsersType = MapStateToPropsType & MapDispatchToPropsType;
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID: string) => {
            dispatch(unFollowAC(userID));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },
        toggleIsLoading: (isLoading: boolean) => {
            dispatch(toggleIsLoadingAC(isLoading));
        }

    };
};
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);
