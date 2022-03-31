import classes from "./Dialogs.module.css";
import React, {ChangeEvent, RefObject} from "react";
import { Message } from "./Message/Message";
import { Dialog } from "./Dialog/Dialog";
import {DialogsPropsType} from "./DialogsContainer";



export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, addNewMessage, updateNewMessageText}) => {

    const dialogsElements = dialogsPage.dialogsData.map(dialog => <Dialog key={dialog.id} name={dialog.name} id={dialog.id}/>);
    const messagesElements = dialogsPage.messagesData.map(message =>  <Message key={message.id} message={message.message}/>);

    const addMessage = () => {
        addNewMessage();
    };
    const updateMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageText(e.currentTarget.value);
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
                    onChange={(e) => updateMessageText(e)}
                    placeholder={"Enter your message..."}
                />
                <button onClick={addMessage}>Send message</button>
            </div>

        </div>
    );
};
