import { PostCard } from "../PostCard/PostCard";

export const Post = (props) => {
    const { posts } = props;

    return (
        <div className="posts">
        {
          posts.map(post => (
            <PostCard post={post} key={post.id}/>
          ))
        }
        </div>
    )
}