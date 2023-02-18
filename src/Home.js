import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: posts, isPending, error} = useFetch('http://localhost:3001/posts');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <BlogList blog={posts} title="All Blogs"/>
        </div>
    );
}

export default Home;
