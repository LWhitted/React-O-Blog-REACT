import BlogList from './BlogList';
import useFetch from './UseFetch';

const Home = () => {
    const {data: posts, isPending, error} = useFetch('http://localhost:3001/');
    // http will not return data (fetch aborted) && give us cors issues, https will not retrieve data
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <BlogList posts={posts} title="All Blogs"/>
        </div>
    );
}

export default Home;
