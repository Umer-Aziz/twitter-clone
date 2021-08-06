import { Avatar, Button } from "@material-ui/core";
import React,{ useState } from 'react'
import "../TweetBox.css"
import db from "../firebase";
const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const SendTweet = (e) =>{
        e.preventDefault();  
        db.collection("posts").add({
      displayName: "Rafeh Qazi",
      username: "cleverqazi",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avator:"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
    });

    setTweetMessage("");
    setTweetImage("");     
    };
    return (
        <div className="tweetBox">

        <form>
            <div className="tweetBox_input">
            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
            <input 
             value={tweetMessage}
             onChange={e => setTweetMessage(e.target.value)}
             placeholder="What's happening?"type="text"/>
            </div>
            <input 
            value={tweetImage}
            onChange={e =>setTweetImage(e.target.value)}
            className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"/>
           <Button onClick={SendTweet} type="submit" className="tweetBox_tweetBtn">Tweet</Button>
        </form>
        </div>
    );
}

export default TweetBox
