// this component is used to create new blogs in our React app.

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// this code builds the basic form to add a blog. we only display add blog
// button if isPending is false
const Create = () => {
    const [title, setTitle] =useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();
    const arrHistory = Array.from(history);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsPending(true);

        await fetch('/posts', {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: title,
                body: body,
                category: category,
                isPublished: true,
                createdAt: new Date(),
                updatedAt: new Date()
            })
        }).then(() => {
            setIsPending(false);
            arrHistory.push('/');
        })
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog category:</label>
                <textarea
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
            </form>
        </div>
    );
}

export default Create;