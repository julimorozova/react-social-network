export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
};
export type ProfilePageType = {
    newPostText: string
    postsData: Array<PostsDataType>
};
export type DialogsPageType = {
    dialogsData: Array<DialogDataType>
    newMessageText: string
    messagesData: Array<MessageDataType>
};
export type DialogDataType = {
    id: string
    name: string
};
export type MessageDataType = {
    id: string
    message: string
};
export type PostsDataType = {
    id: string
    message: string
    likesCount: number
};
export type StoreType = {
    _state: StateType
};

export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: 'Hi!',
            postsData: [
                {id: "1", message: 'It is my first post', likesCount: 12},
                {id: "2", message: 'Hi, how are you?', likesCount: 13},
                {id: "3", message: 'You create cool app!', likesCount: 255}
            ],
        },
        dialogsPage: {
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
        }
    }
};
