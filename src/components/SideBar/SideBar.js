import React from 'react';
import { Button, Avatar } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import SideBarOptions from './SideBarOptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ChatIcon from '@mui/icons-material/Chat';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import { useDispatch, useSelector } from 'react-redux';
import { openComposeMessage } from '../../store/mailSlice';
import './SideBar.css'

const SideBar = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.authData);
    const totalMessage = useSelector(state => state.mail.totalInboxMessage)

    return (
        <div className='sidebar'>
            <Button onClick={() => dispatch(openComposeMessage())} startIcon={<AddIcon />} className='compose-btn'>COMPOSE</Button>
            <div className='sidebar-options'>
                <SideBarOptions Icon={InboxIcon} title='Inbox' number={totalMessage} isActive={true} />
                <SideBarOptions Icon={StarBorderIcon} title='Starred' number='24' />
                <SideBarOptions Icon={AccessTimeIcon} title='Snoozed' number='77' />
                <SideBarOptions Icon={SendIcon} title='Sent' number='72' />
                <SideBarOptions Icon={DraftsIcon} title='Draft' number='5' />
                <SideBarOptions Icon={LabelIcon} title='Category' number='12' />
                <SideBarOptions Icon={DeleteIcon} title='[Map]/Trash' number='224' />
                <SideBarOptions Icon={FindInPageIcon} title='Documents' number='11' />
                <SideBarOptions Icon={ExpandMoreIcon} title='Importants' number='45' />
                <SideBarOptions Icon={LabelImportantIcon} title='Chats' number='45' />
                <SideBarOptions Icon={ScheduleSendIcon} title='Scheduled' number='45' />
                <SideBarOptions Icon={MarkAsUnreadIcon} title='All Mails' number='45' />
                <SideBarOptions Icon={OfflineBoltIcon} title='Spam' number='45' />
                <SideBarOptions Icon={ChatIcon} title='More' number='45' />
                <SideBarOptions Icon={ChatIcon} title='More' number='45' />
            </div>

            <hr />
            <h3 className='sidebarOptions-heading'>
                Meet
            </h3>
            <SideBarOptions isUrlActive={true} Icon={VideocamIcon} title='New meeting' />
            <SideBarOptions isUrlActive={true} Icon={KeyboardIcon} title='Join a meeting' />

            <hr />
            <h3 className='sidebarOptions-heading'>
                Hangouts
            </h3>
            <hr />
            <SideBarOptions Icon={Avatar} title={user.displayName} photoURL={user.photoURL} isUrlActive={true} />
        </div>
    )
}

export default SideBar