import React from 'react';
import { IconButton, Avatar } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../InboxMail/InboxMail.css';


const EmailDetail = () => {

    const navigate = useNavigate();
    const inboxDetail = useSelector((state) => state.mail.inboxSelectedMessage);
    const user = useSelector(state => state.auth.authData);

    const backFromMessageDetail = () => {
        localStorage.removeItem('inboxData');
        navigate('/')
    }



    return (
        <div className='emailDetail'>
            <div className='emailList-setting'>
                <div className='emailList-left'>
                    <IconButton onClick={backFromMessageDetail} >
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className='emaiList-right'>
                    <p>1-20 of 10,020</p>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        < ChevronRightIcon />
                    </IconButton>
                </div>
            </div>

            <div className='emailDetails-message'>
                <div className='emailDetail-header'>
                    <div className='emailDetail-header-left'>
                        <h4>{inboxDetail.subject}</h4>
                        <IconButton>
                            <LabelImportantIcon />
                        </IconButton>
                        <IconButton>
                            <Avatar src={user.photoURL} />
                        </IconButton>
                        <p><small>{'<'}{inboxDetail.emailTo}{'>'}</small></p>
                    </div>
                    <div className='emailDetail-header-right'>
                        <IconButton>
                            <StarIcon />
                        </IconButton>
                        <IconButton>
                            <LaunchIcon />
                        </IconButton>
                    </div>
                </div>

                <div className='emailDetail-middle'>
                    <div className='emailDetail-middle-left'>
                        <IconButton>
                            <Avatar src={inboxDetail.photoURL} />
                        </IconButton>
                        <h4>{inboxDetail.name}</h4>

                        <p>From : <small>{'<'}{inboxDetail.emailFrom}{'>'}</small></p>
                    </div>
                    <div className='emailDetail-middle-right'>
                        <p>{inboxDetail.time}</p>
                        <IconButton>
                            <LocalPrintshopIcon />
                        </IconButton>
                        <IconButton>
                            <ReplyIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>

                <div className='emailDetails-body'>
                    <p>{inboxDetail.message}</p>
                </div>
            </div>

        </div >
    )
}

export default EmailDetail