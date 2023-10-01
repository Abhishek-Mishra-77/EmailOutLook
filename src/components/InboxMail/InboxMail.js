import React, { useState, useEffect } from 'react';
import EmailListSetting from './EmailListSetting';
import EmailType from '../EmailType/EmailType';
import InboxBody from '../InboxBody/InboxBody';
import { useSelector, useDispatch } from 'react-redux';
import { totalNewInboxMails } from '../../store/mailSlice';
import { db } from '../../firebase';
import './InboxMail.css';

const EmailList = () => {

    const [emails, setEmails] = useState([]);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.authData);
    useEffect(() => {
        db.collection('sentMails').doc(user.email).collection('inboxMails').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                inboxMails: doc.data()
            })))
        })
    }, [])


    const checkInboxMails = () => {
        let count = 0;
        for (let i = 0; i < emails.length; i++) {
            if (emails[i].inboxMails.inboxMails) {
                count++;
            }
        }
        dispatch(totalNewInboxMails(count));
    }

    checkInboxMails()



    return (
        <div className='emailList'>
            <EmailListSetting />
            <EmailType />
            {emails.map(({ id, inboxMails }) => {
                return < InboxBody key={id} photoURL={inboxMails.photoURL} emailFrom={inboxMails.fromEmail} emailTo={inboxMails.to} name={inboxMails.fromName} subject={inboxMails.subject} message={inboxMails.message} time={new Date(inboxMails.timestamp?.seconds * 1000).toLocaleTimeString()} />
            })}
        </div>
    )
}

export default EmailList;