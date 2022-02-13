import classes from './MyPosts.module.css'
import { Post } from "./Post/Post";

export const MyPosts = () => {
    type PostsDataType = {
        id: string
        message: string
        likeCount: number
    }
    let postsData: Array<PostsDataType> = [
        {id: "1", message: "Hi!", likeCount: 1},
        {id: "2", message: "How are you?", likeCount: 45},
        {id: "3", message: "I want to know React very well. After that I will get very interesting job!", likeCount: 21},
    ]

    const postsElements = postsData.map(post => <Post message={post.message} likeCount={post.likeCount} />)
    return (
        <div className={classes.userPosts}>
            <h3>My Posts</h3>
            <textarea/>
            <button>Add post</button>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )
}