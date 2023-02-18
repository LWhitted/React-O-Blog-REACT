import { Link } from 'react-router-dom';

const BlogList = ({blogs, title}) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                    </div>
            ))}
        </div>
    );
}

export default BlogList;

// I believe this js I might need to somehow pull in the endpoints from my server. I need to
// come back to this js to analyze