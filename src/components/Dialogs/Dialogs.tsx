import classes from "./Dialogs.module.css";
import React from "react";
import { Message } from "./Message/Message";
import { Dialog } from "./Dialog/Dialog";

export const Dialogs = () => {
    type DialogDataType = {
        id: string
        name: string
    }
    let dialogsData: Array<DialogDataType> = [
        {id: "1", name: "Ivan"},
        {id: "2", name: "Anna"},
        {id: "3", name: "Andrew"},
        {id: "4", name: "Olga"},
    ]

    type MessageDataType = {
        id: string
        message: string
    }
    let messagesData: Array<MessageDataType> = [
        {id: "1", message: "Hello!"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "I'm fine!"},
        {id: "4", message: "Hello!"},
    ]
    const dialogsElements = dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    const messagesElements = messagesData.map(message =>  <Message message={message.message}/>)
    console.log(dialogsElements)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                { dialogsElements}
            </div>

            <div className={classes.messages}>
                { messagesElements }
            </div>
        </div>
    )
}