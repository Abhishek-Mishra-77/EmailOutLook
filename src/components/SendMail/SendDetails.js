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


const SendDetail = () => {

    const navigate = useNavigate();
    const emailDetails = useSelector((state) => state.mail.sendSelectedMessage);
    const user = useSelector(state => state.auth.authData);

    const backFromMessageDetail = () => {
        navigate('/send')
        localStorage.removeItem('sendData');
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
                        <h4>{emailDetails.subject}</h4>
                        <IconButton>
                            <LabelImportantIcon />
                        </IconButton>
                        <p>To : <small>{'<'}{emailDetails.emailTo}{'>'}</small></p>
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
                            <Avatar src={user.photoURL} />
                        </IconButton>
                        <h4>{emailDetails.name}</h4>
                        <p><small>{'<'}{emailDetails.emailFrom}{'>'}</small></p>
                    </div>
                    <div className='emailDetail-middle-right'>
                        <p>{emailDetails.time}</p>
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
                    <p>{emailDetails.message}</p>
                </div>
            </div>

        </div >
    )
}

export default SendDetail;