import {
    ActionType,
    AddMessageAT,
    MessageDataType,
    UpdateNewMessageTextAT
} from "./store";
import {v1} from "uuid";


const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export type DialogsPageType = {
    dialogsData: Array<DialogDataType>
    newMessageText: string
    messagesData: Array<MessageDataType>
};
export type DialogDataType = {
    id: string
    name: string
};
const initialState: DialogsPageType = {
    dialogsData: [
        {id: "1", name: 'Andrey'},
        {id: "2", name: 'Anna'},
        {id: "3", name: 'Frol'}
    ],
    newMessageText: '',
    messagesData: [
        {id: "1", message: 'Hi'},
        {id: "2", message: 'How are you?'},
        {id: "3", message: 'I am fine'}
    ]
};

export const dialogReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    let copyState;
    switch (action.type) {
        case(ADD_MESSAGE): {
            copyState = {...state, messagesData: [...state.messagesData]}
            const newMessage: MessageDataType = {
                id: v1(),
                message: copyState.newMessageText
            };
            copyState.messagesData.push(newMessage);
            copyState.newMessageText = '';
            return copyState;
        }
        case(UPDATE_NEW_MESSAGE_TEXT): {
            copyState = {...state}
            copyState.newMessageText = action.newMessageText;
            return copyState;
        }
        default:
            return state;
    }
};
export const AddMessageAC = (): AddMessageAT => ({type: ADD_MESSAGE});
export const UpdateMessageTextAC = (newMessageText: string): UpdateNewMessageTextAT => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText
});
