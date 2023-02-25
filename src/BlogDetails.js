// this is the component where we fetch and display a single blog post.

import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './UseFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: posts, error, isPending } = useFetch('http://localhost:3001/posts/'+ id);
    const history = useNavigate();
// useHistory() creates a history stack and pushes or pops elements from that stack
// allows us to store the blogs

// below we are fetching blog, passing the delete method in order to add thw
// delete button and then we push the URL to the history stack redirecting
// the user to the homepage after the blogs deletion
    const handleClick = () => {
        fetch('/posts/'+id, {
            method: 'DELETE'
        }) 
        .then(() => {
            history.push('/');
        })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article>
                <h2>{posts.title}</h2>
                <p>Category: {posts.category}</p>
                <div>{posts.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
    );
}

export default BlogDetails;