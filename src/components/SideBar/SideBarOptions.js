import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SideBarOptions.css'

const SidebarOptions = ({ Icon, title, number, isActive, isUrlActive, photoURL }) => {

    const navigate = useNavigate();

    const moveMailHandler = (title) => {
        if (title === 'Inbox') {
            navigate('/')
        }
        else if (title === 'Sent') {
            navigate('/send')
        }
    }

    return (
        <div onClick={() => moveMailHandler(title)} className={`sidebarOptions ${isActive && 'sidebarOptions--active'}`}>
            {isUrlActive ? <Icon src={photoURL} /> : < Icon />}
            <h4>{title}</h4>
            <p>{number}</p>
        </div >
    )
}

export default SidebarOptions