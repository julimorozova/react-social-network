import React from "react";
import { DialogsPageType} from "../../redux/store";
import {AddMessageAC, UpdateMessageTextAC} from "../../redux/dialog-reducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";



type MapStateToPropsType = {
    dialogsPage: DialogsPageType
};
type MapDispatchToPropsType = {
    addNewMessage: () => void
    updateNewMessageText: (text: string) => void
};

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addNewMessage: () => {dispatch(AddMessageAC());},
        updateNewMessageText: (text: string) => {dispatch(UpdateMessageTextAC(text));}
    };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
