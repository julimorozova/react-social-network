import React from "react";
import classes from "./Message.module.css";

type MessagePropsType = {
    message: string
};
export const Message: React.FC<MessagePropsType> = ({message}) => {
    return (
        <div className={classes.message}>
            { message }
        </div>
    );
};
