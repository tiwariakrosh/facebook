import React from 'react'
import Post from '../post/Post'
import "./Feed.css"
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className='Feed'>
            <StoryReel />
            <MessageSender />
            <Post
                profilePic="./assets/profile1.jpg"
                message="Good morning guys!!"
                timestamp="2h"
                userName="akrosh02"
                image="./assets/story2.jpg"
            />
            <Post
                profilePic="./assets/profile4.jpg"
                message="This is my first post"
                timestamp="1d"
                userName="Dinesh Dash"
                image="./assets/story3.jpg"
            />
            <Post
                profilePic="./assets/profile3.jpg"
                message="Hello guys!!"
                timestamp="1h"
                userName="Sonika Thapa"
                image="./assets/story5.jpg"
            />
        </div>
    )
}

export default Feed