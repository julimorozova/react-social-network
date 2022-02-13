import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

type DialogPropsType = {
    name: string,
    id: string
}
export const Dialog: React.FC<DialogPropsType> = ({
    name,
    id
    }) => {
    const setActive = ({isActive}: any) => isActive ? `${classes.dialog_link} ${classes.active}` : classes.dialog_link;

    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${ id }`} className={ setActive }>{ name }</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}
export const Message: React.FC<MessagePropsType> = ({
    message
    }) => {
    return (
        <div className={classes.message}>
            { message }
        </div>
    )
}
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
        message: string
    }
    let messagesData: Array<MessageDataType> = [
        {message: "Hello!"},
        {message: "How are you?"},
        {message: "I'm fine!"},
        {message: "Hello!"},
    ]
    const dialogsElements = dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    const messagesElements = messagesData.map(message =>  <Message message={message.message}/>)

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