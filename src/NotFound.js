// this component displays the 404 Error page in our application whenever a user navs to a page that does
// not exist.

import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>404 Error</h2>
            <p>We cannot find that page!</p>
            <Link to='/'>Take me back to Home</Link>
        </div>
    );
}

export default NotFound;