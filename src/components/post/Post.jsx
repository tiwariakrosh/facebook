import { ChatBubbleOutline, Reply, ThumbUp } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

function Post({ profilePic, image, userName, timestamp, message }) {
    return (
        <div className='post'>
            <div className="post_top">
                <Avatar src={profilePic} className='post_avatar' />
                <div className="postTop_info">
                    <h4>{userName}</h4>
                    <p>{timestamp}</p>
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
                        <p>22</p>
                    </div>
                    <div className="comment_count">
                        <p>3</p>
                        <p>comment</p>
                    </div>
                </div>
                <hr />
                <div className="postOption_bottom">
                    <div className="post_option">
                        <ThumbUp />
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