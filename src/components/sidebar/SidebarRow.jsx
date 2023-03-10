import React from 'react'
import "./SidebarRow.css"
import { Avatar } from '@mui/material'

function SidebarRow({ title, src, Icon }) {
    return (
        <div className='SidebarRow'>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h5>{title}</h5>
        </div>
    )
}

export default SidebarRow