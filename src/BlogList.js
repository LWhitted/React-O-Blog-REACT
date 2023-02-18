import { Link } from 'react-router-dom';

const BlogList = ({posts, title}) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {posts.map(posts => (
                <div className="blog-preview" key={posts.id}>
                    <Link to={`/posts/${posts.id}`}>
                        <h2>{posts.title}</h2>
                        <p>Written by {posts.author}</p>
                    </Link>
                    </div>
            ))}
        </div>
    );
}

export default BlogList;

// I believe this js I might need to somehow pull in the endpoints from my server. I need to
// come back to this js to analyze