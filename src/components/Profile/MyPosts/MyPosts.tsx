import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={classes.userPosts}>
            <h3>My Posts</h3>
            <textarea/>
            <button>Add post</button>
            <div className={classes.posts}>
               <Post
                   message='Hi!'
                   likeCount={10}
               />
               <Post
                   message='How are you?'
                   likeCount={0}
               />
               <Post
                   message='I am fine'
                   likeCount={15}
               />
            </div>
        </div>
    )
}