import { ChatBubbleOutline, Reply, ThumbUp, ThumbUpOffAlt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./Post.css"

function Post({ profilePic, image, userName, timestamp, message }) {
    const [count, setCount] = useState(0)
    return (
        <div className='post'>
            <div className="post_top">
                <Avatar src={profilePic} className='post_avatar' />
                <div className="postTop_info">
                    <h4>{userName}</h4>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_img">
                <img src={image} alt="" />
            </div>

            <div className="post_options">
                <div className="postOption_top">
                    <div className="like_count">
                        <ThumbUp />
                        <p>{count}</p>
                    </div>
                    <div className="comment_count">
                        <p>3</p>
                        <p>comment</p>
                    </div>
                </div>
                <hr />
                <div className="postOption_bottom">
                    <div className="post_option">
                        <ThumbUpOffAlt
                            onClick={() => setCount(count + 1)}
                        />
                        <p>Like</p>
                    </div>
                    <div className="post_option">
                        <ChatBubbleOutline />
                        <p>Comment</p>
                    </div>
                    <div className="post_option">
                        <Reply />
                        <p>Share</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post