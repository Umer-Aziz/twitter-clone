import React,{useState , useEffect} from 'react'
import "../Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'
import db from '../firebase'
import FlipMove from 'react-flip-move'

const Feed = () => {
    const [posts, setPost] = useState([]);
     
    useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>(
        setPost(snapshot.docs.map(doc => doc.data()))
    ));
    }, []);
    return (
        <div className="Feed">
            {/* Header */}
            <div className="Feed_header">
            <h2>Home</h2>
            </div>
            <TweetBox/> 
            <FlipMove>     
            { posts.map(post =>(
            
            <Post 
                 key={post.text}
                 displayName={post.displayName}
                 username={post.username}
                 verified = {post.verified}
                 text={post.text}
                 avator = {post.avator}
                 image = {post.image}
            />      
            ))}
            </FlipMove> 
        </div>
    )
}

export default Feed
