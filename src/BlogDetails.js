// this is the component where we fetch and display a single blog post.

import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:3000/blogs/'+ id);
    const history = useHistory();
// useHistory() creates a history stack and pushes or pops elements from that stack
// allows us to store the blogs

// below we are fetching blog, passing the delete method in order to add thw
// delete button and then we push the URL to the history stack redirecting
// the user to the homepage after the blogs deletion
    const handleClick = () => {
        fetch('http://localhost:3000/blogs/'+blog.id, {
            method: 'DELETE'
        }). then(() => {
            history.push('/');
        })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
    );
}

export default BlogDetails;