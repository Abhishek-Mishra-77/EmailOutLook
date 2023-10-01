import React, { useState, useEffect } from 'react';
import EmailListSetting from '../InboxMail/EmailListSetting';
import SendBody from './SendBody'
import EmailType from '../EmailType/EmailType';
import { useSelector } from 'react-redux';
import { db } from '../../firebase';
import '../InboxMail/InboxMail.css'

const SendMail = () => {

    const [emails, setEmails] = useState([]);
    const user = useSelector(state => state.auth.authData);

    useEffect(() => {
        db.collection('sentMails').doc(user.email).collection('sendMails').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                sendEmails: doc.data()
            })))
        })
    }, [user.email])


    return (
        <div className='emailList'>
            <EmailListSetting />
            <EmailType />
            {emails.map(({ id, sendEmails }) => {
                return <SendBody key={id} emailFrom={sendEmails.fromEmail} emailTo={sendEmails.to} name={sendEmails.fromName} subject={sendEmails.subject} message={sendEmails.message} time={new Date(sendEmails.timestamp?.seconds * 1000).toLocaleTimeString()} />
            })}
        </div>
    )
}

export default SendMail;