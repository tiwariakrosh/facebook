import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./messageSender.css"
import { useStateValue } from '../../StateProvider';
import db from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const colRef = collection(db, 'posts')
        addDoc(colRef, {
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            //timestamp: null,
            profilePic: user.photoURL,
            userName: user.displayName,
            image: imageUrl
        })


        setInput('')
        setImageUrl('')
    }

    return (
        <div className='messageSender'>
            <div className="messageSender_top">
                <Avatar src={user.photoURL} alt={user.displayName} />
                <form action="">
                    <input type="text"
                        value={input} onChange={(e) => setInput(e.target.value)}
                        placeholder={`What's on your mind, ${user.displayName}?`} />
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