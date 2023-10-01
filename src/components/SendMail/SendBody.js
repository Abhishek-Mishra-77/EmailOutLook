import React from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { openSendMessageDetail } from '../../store/mailSlice';
import '../InboxBody/InboxBody.css';



const SendBody = ({ name, subject, emailFrom, emailTo, message, time }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const openMessageHandler = () => {
        dispatch(openSendMessageDetail({
            name,
            subject,
            message,
            time,
            emailTo,
            emailFrom,
            send: 'send'
        }))
        navigate('/sendDetail')
    }

    return (
        <div className='emailBody' onClick={openMessageHandler}>
            <div className='emailBody-left'>
                <CheckBoxOutlineBlankIcon />
                <StarBorderIcon />
                <LabelOutlinedIcon />
                <p>To : {`${emailTo} -> `}</p>
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

export default SendBody;