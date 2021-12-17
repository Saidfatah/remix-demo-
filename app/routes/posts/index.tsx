import { useLoaderData,Link } from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post";
 
export const loader = () => {
    return getPosts();
};

//we can use fake api
export default function PostSlug(){
    const posts = useLoaderData<Post[]>();
    console.log(posts)
    return <div>
        <h1>Posts</h1>
        <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
}