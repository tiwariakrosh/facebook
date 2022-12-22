import React from 'react'
import Story from './Story'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image="./assets/story.jpg" profileSrc="./assets/profile.png" title='Akrosh Tiwari' />
            <Story image="./assets/story1.webp" profileSrc="./assets/story3.jpg" title='Hari Khadka' />
            <Story image="./assets/story2.jpg" profileSrc="./assets/profile1.jpg" title='Nabin  Thapa' />
            <Story image="./assets/story3.jpg" profileSrc="./assets/profile2.jpg" title='Sonny Chamling' />
            <Story image="./assets/story4.jpg" profileSrc="./assets/profile3.jpg" title='Udeya Joshi' />
            {/* <Story image="./assets/story6.jpg" profileSrc="./assets/profile4.jpg" title='Sumit Sharma' /> */}
        </div>
    )
}

export default StoryReel