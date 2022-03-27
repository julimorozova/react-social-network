import classes from "./Dialogs.module.css";
import React, {ChangeEvent, RefObject} from "react";
import { Message } from "./Message/Message";
import { Dialog } from "./Dialog/Dialog";
import {ActionType, DialogsPageType} from "../../redux/store";
import {AddMessageAC, UpdateMessageTextAC} from "../../redux/dialog-reducer";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void
};

export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, dispatch}) => {

    const dialogsElements = dialogsPage.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    const messagesElements = dialogsPage.messagesData.map(message =>  <Message message={message.message}/>);

    const addMessage = () => {
        dispatch(AddMessageAC());
    };
    const updateNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(UpdateMessageTextAC(e.currentTarget.value));
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                { dialogsElements}
            </div>

            <div className={classes.messages}>
                { messagesElements }
                <textarea
                    value={dialogsPage.newMessageText}
                    onChange={(e) => updateNewMessageText(e)}
                    placeholder={"Enter your message..."}
                />
                <button onClick={addMessage}>Send message</button>
            </div>

        </div>
    );
};
