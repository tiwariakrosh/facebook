import React, { useState, useEffect } from 'react'
import Post from '../post/Post'
import "./Feed.css"
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import db from "../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const colRef = collection(db, 'posts')
        const database = query(colRef, orderBy("timestamp", "desc"))
        getDocs(database)
            .then((snapshot) =>
                setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })))
            );
    }, []);

    return (
        <div className='Feed'>
            <StoryReel />
            <MessageSender />
            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    userName={post.data.userName}
                    image={post.data.image}
                />
            ))}
        </div>
    )
}

export default Feed