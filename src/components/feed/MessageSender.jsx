import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./messageSender.css"

function MessageSender() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setInput('')
        setImageUrl('')
    }

    return (
        <div className='messageSender'>
            <div className="messageSender_top">
                <Avatar />
                <form action="">
                    <input type="text"
                        value={input} onChange={(e) => setInput(e.target.value)}
                        placeholder='Whats on your mind' />
                    <input
                        value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (Optional)" />
                    <button onClick={handleSubmit} type="submit">Hidden Button</button>
                </form>
            </div>
            <hr />
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <Videocam style={{ color: "red" }} />
                    <h4>Live Video</h4>
                </div>
                <div className="messageSender_option">
                    <PhotoLibrary style={{ color: "green" }} />
                    <h4>Photo/Video</h4>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticon style={{ color: "orange" }} />
                    <h4>Feeling / Activity</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageSender