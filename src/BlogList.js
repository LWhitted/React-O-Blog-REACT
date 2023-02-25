import { Link } from 'react-router-dom';
import { useMemo } from 'react';

const BlogList = ({ posts, title }) => {
    console.log(posts);
    const createdPosts = useMemo(() => {
        return Array.from(posts).map(post => {
            console.log(post);
            return (
                <div className="blog-preview" key={post.id}>
                    <Link to={`/posts`}>
                    <h2>{post.title}</h2>
                    </Link>
                </div>
            )
        })
    }, [posts])
    console.log(createdPosts);
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {createdPosts}
        </div>
    );
}

export default BlogList;

