import { Avatar } from '@mui/material'
import React from 'react'
import "./story.css"

function Story({ image, profileSrc, title }) {
    return (
        <div className='story' style={{ backgroundImage: `url(${image})` }}>
            <Avatar src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story