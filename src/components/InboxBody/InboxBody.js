import React from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { openInboxMessageDetail } from '../../store/mailSlice';
import './InboxBody.css';



const InboxBody = ({ name, subject, emailFrom, emailTo, message, time, photoURL }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const openMessageHandler = () => {
        dispatch(openInboxMessageDetail({
            name,
            subject,
            message,
            time,
            emailTo,
            emailFrom,
            photoURL,
            send: 'inbox'
        }))
        navigate('/inboxDetail')
    }

    return (
        <div className='emailBody inbox-body' onClick={openMessageHandler}>
            <div className='emailBody-left'>
                <CheckBoxOutlineBlankIcon />
                <StarBorderIcon />
                <LabelOutlinedIcon />
                <h4>{name}</h4>
            </div>


            <div className='emailBody-middle'>
                <div className='emailBody_middle_msg'>
                    <p><b>{subject}</b> - {message}</p>
                </div>
            </div>
            <div className='emailBody-right'>
                <p>{time}</p>
            </div>
        </div >
    )
}

export default InboxBody