import React from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { useSelector } from 'react-redux';
import firebase from 'firebase/compat/app';
import './Header.css';



const Header = () => {

    const user = useSelector(state => state.auth.authData);

    return (
        <div className='header'>
            {/* left */}
            <div className='header-left'>
                <IconButton>
                    <ReorderIcon />
                </IconButton>
                <img src='https://tse3.mm.bing.net/th?id=OIP.48fC0MnDnBVSuAXnHZNv4wHaHa&pid=Api&P=0&h=180' alt='logo' />
            </div>

            {/* middle */}
            <div className='header-middle'>
                <div className='search-mail'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input type='text' placeholder='Search mail' />
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </div>

            {/* right */}
            <div className='header-right'>
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <Avatar src={user?.photoURL} onClick={() => firebase.auth().signOut()}></Avatar>
            </div>
        </div >
    )
}

export default Header