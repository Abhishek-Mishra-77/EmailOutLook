import React, { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { closeComposeMessage } from '../../store/mailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';
import './Compose.css';
const Compose = () => {

    const [sendTo, setSendTo] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.authData);


    const inboxMails = () => {
        if (sendTo === '') {
            alert('Reciept is required')
        }
        else if (message === '') {
            alert('Subject is required')
        }
        else if (subject === '') {
            alert('Message is required')
        }
        db.collection('sentMails').doc(sendTo).collection('inboxMails').add({
            to: sendTo,
            subject: subject,
            message: message,
            fromEmail: user.email,
            fromName: user.displayName,
            inboxMails: true,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }

    const sendMails = () => {
        db.collection('sentMails').doc(user.email).collection('sendMails').add({
            to: sendTo,
            subject: subject,
            message: message,
            fromEmail: user.email,
            fromName: user.displayName,
            sendMails: true,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessage('');
        setSendTo('')
        setSubject('')
        alert('Email sent successfully....');
        dispatch(closeComposeMessage())
    }


    const onSendEmailHandler = (e) => {
        e.preventDefault();
        inboxMails();
        sendMails()
    }


    return (
        <div className='compose'>
            <div className='compose-header'>
                <div className='compose-header-left'>
                    <span>New Message</span>
                </div>
                <div className='comopose-header-right'>
                    <RemoveIcon />
                    <HeightIcon />
                    <CloseIcon onClick={() => dispatch(closeComposeMessage())} />
                </div>
            </div>

            <form onSubmit={onSendEmailHandler}>
                <div className='compose-body'>
                    <div className='compose-form'>
                        <input
                            value={sendTo}
                            onChange={(e) => setSendTo(e.target.value)}
                            type='email'
                            placeholder='Reciepents' />

                        <input
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            type='text'
                            placeholder='Subject' />

                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            cols={60}
                            rows={28}>{message}
                        </textarea>
                    </div>
                </div>

                <div className='compose-footer'>
                    <div className='compose-footer-left'>
                        <button type='submit'>Send <ArrowDropDownIcon /></button>
                    </div>
                    <div className='compose-footer-right'>
                        <AttachFileIcon />
                        <LinkIcon />
                        <InsertEmoticonIcon />
                        <NoteAddIcon />
                        <PhotoIcon />
                        <PhonelinkLockIcon />
                        <CreateIcon />
                        <MoreVertIcon />
                        <DeleteIcon />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Compose