import { MoreHoriz, Search, VideoCall, VideocamRounded } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react'
import "./widgets.css"

function Widgets() {
    return (
        <div className='widgets'>
            <div className="widget_top">
                <h3>Birthdays</h3>
                <div className="widgetTop_contain">
                    <img src='./assets/gift.png' alt="gift box" width={40} />
                    <p><strong>Prashan</strong>'s birthday is todays.</p>
                </div>
            </div>
            <div className="widget_bottom">
                <div className="widgetBottom_top">
                    <h4>Contacts</h4>
                    <div className="Widget_icon">
                        <VideoCall />
                        <Search />
                        <MoreHoriz />
                    </div>
                </div>
                <div className="contact_item">
                    <Avatar src='./assets/profile2.jpg' />
                    <h5>Anish Tiwari</h5>
                </div>
                <div className="contact_item">
                    <Avatar src='./assets/profile4.jpg' />
                    <h5>Subash Khatiwada</h5>
                </div>
                <div className="contact_item">
                    <Avatar src='./assets/profile5.jpg' />
                    <h5>Sita Sapkota</h5>
                </div>
                <div className="contact_item">
                    <Avatar src='./assets/profile3.jpg' />
                    <h5>Laxman Dahal</h5>
                </div>
                <div className="contact_item">
                    <Avatar src='./assets/profile2.jpg' />
                    <h5>Hari Krishna Shrestha</h5>
                </div>
                <div className="contact_item">
                    <Avatar src='./assets/profile1.jpg' />
                    <h5>Manisha Khati</h5>
                </div>
                <div className="contact_item">
                    <Avatar src='./assets/profile4.jpg' />
                    <h5>Som Nath Kalam</h5>
                </div>
                <div className="contact_item">
                    <Avatar src='./assets/profile4.jpg' />
                    <h5>Pranisha Paudel</h5>
                </div>
            </div>
        </div>
    )
}

export default Widgets;