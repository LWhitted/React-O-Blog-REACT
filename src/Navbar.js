// this component is used to display the navbar on our blog website. It would be a simple Navbar with two links
// home (clicking on this takes the user to the homepage)
// Create Blog (clicking on this link will take the user to the new blog creation page)
// I need to create a nav to a single blog post...

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>React Blog App</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create Blog</Link>
                {/* I need to add a link to nav to a single blog post */}
            </div>
        </nav>
    );
}

export default Navbar;