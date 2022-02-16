import React from "react";
import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

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