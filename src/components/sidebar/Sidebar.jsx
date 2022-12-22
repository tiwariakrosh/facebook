
import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import PeopleIcon from '@mui/icons-material/People';
import { EmojiFlags } from '@mui/icons-material'
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AppsIcon from '@mui/icons-material/Apps';

function Sidebar({ src, Icon, title }) {
    return (
        <div className="sidebar">
            <SidebarRow src='./assets/profile.png' title="Akrosh Tiwari" height={70} width={70} />
            <SidebarRow Icon={EmojiFlags} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={AppsIcon} title="More Apps" />
        </div>
    )
}

export default Sidebar