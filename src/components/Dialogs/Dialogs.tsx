import classes from "./Dialogs.module.css";
import React from "react";
import { Message } from "./Message/Message";
import { Dialog } from "./Dialog/Dialog";
import {DialogsPageType} from "../../redux/store";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
};

export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage}) => {

    const dialogsElements = dialogsPage.dialogsData.map(dialog => <Dialog key={dialog.id} name={dialog.name} id={dialog.id}/>);
    const messagesElements = dialogsPage.messagesData.map(message =>  <Message key={message.id} message={message.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                { dialogsElements}
            </div>

            <div className={classes.messages}>
                { messagesElements }
            </div>
        </div>
    );
};
