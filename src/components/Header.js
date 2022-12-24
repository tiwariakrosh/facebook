import React from 'react'
import './header.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from '../StateProvider';

function Header({ }) {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className='Header'>
            <div className="header_left">
                <img className='logo' src="./assets/facebook.png" alt="facebook logo" />
                <div className="header_input">
                    <SearchIcon className='search' />
                    <input type="text" />
                </div>
            </div>
            <div className="header_middle">
                <div className="hrader_option active">
                    <HomeIcon fontSize='large' />
                </div>
                <div className="hrader_option">
                    <FlagIcon fontSize='large' />
                </div>
                <div className="hrader_option">
                    <SubscriptionsIcon fontSize='large' />
                </div>
                <div className="hrader_option">
                    <StorefrontIcon fontSize='large' />
                </div>
                <div className="hrader_option">
                    <GroupIcon fontSize='large' />
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL} alt={user.displayName} />
                    <h5>{user.displayName}</h5>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header