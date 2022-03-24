import { AppStateType } from '../reduxStore';

export const getDialogsData = (state: AppStateType) => {
    return state.messages.dialogsData
}

export const getMessagesData = (state: AppStateType) => {
    return state.messages.messagesData
}