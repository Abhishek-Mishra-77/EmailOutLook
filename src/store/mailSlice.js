import { createSlice } from '@reduxjs/toolkit';


const sendLocaleStorage = () => {
    const getData = localStorage.getItem('sendData');
    if (getData) {
        const data = JSON.parse(localStorage.getItem('sendData'));
        return data;
    }
    else {
        return {};
    }
}

const setSendLocaleStorage = (data) => {
    localStorage.setItem('sendData', JSON.stringify(data));
}

const inboxLocaleStorage = () => {
    const getData = localStorage.getItem('inboxData');
    if (getData) {
        const data = JSON.parse(localStorage.getItem('inboxData'));
        return data;
    }
    else {
        return {};
    }
}

const setInboxLocaleStorage = (data) => {
    localStorage.setItem('inboxData', JSON.stringify(data));
}


const mailSlice = createSlice({
    name: 'email',
    initialState: {
        setComposeOpen: false,
        sendSelectedMessage: sendLocaleStorage(),
        inboxSelectedMessage: inboxLocaleStorage(),
        totalInboxMessage: 0
    },
    reducers: {
        openComposeMessage(state) {
            state.setComposeOpen = true;
        },
        closeComposeMessage(state) {
            state.setComposeOpen = false
        },
        openSendMessageDetail(state, actions) {
            state.sendSelectedMessage = actions.payload
            setSendLocaleStorage(actions.payload)
        },
        openInboxMessageDetail(state, actions) {
            state.inboxSelectedMessage = actions.payload
            setInboxLocaleStorage(actions.payload)
        },
        totalNewInboxMails(state, actions) {
            state.totalInboxMessage = actions.payload
        }
    }
})


export const { openComposeMessage, closeComposeMessage, totalNewInboxMails, openSendMessageDetail, openInboxMessageDetail } = mailSlice.actions;


export default mailSlice.reducer;