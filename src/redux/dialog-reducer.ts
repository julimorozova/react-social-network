import {
    ActionType,
    AddMessageAT,
    DialogsPageType,
    MessageDataType,
    UpdateNewMessageTextAT
} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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

export const dialogReducer = (state: DialogsPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case(ADD_MESSAGE): {
            const newMessage: MessageDataType = {
                id: "4",
                message: state.newMessageText
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        }
        case(UPDATE_NEW_MESSAGE_TEXT):
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
};
export const AddMessageAC = (): AddMessageAT => ({type: ADD_MESSAGE});
export const UpdateMessageTextAC = (newMessageText: string): UpdateNewMessageTextAT => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText
});
