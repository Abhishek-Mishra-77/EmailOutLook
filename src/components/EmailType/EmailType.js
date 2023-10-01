import React from 'react';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import './EmailType.css';

const EmailType = () => {
    return (
        <div className='emailType'>
            <div className='emailtype-options emailtype-options-active'>
                <InboxIcon />
                <p>Primary</p>
            </div>
            <div className='emailtype-options'>
                <PeopleIcon />
                <p>Social</p>
            </div>
            <div className='emailtype-options'>
                <LocalOfferIcon />
                <p>Promotions</p>
            </div>
        </div>
    )
}

export default EmailType