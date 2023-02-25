import BlogList from './BlogList';
import useFetch from './UseFetch';

const Home = () => {
    const {data: posts, isPending, error} = useFetch('/posts');
    console.log(posts);
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <BlogList posts={posts} title={"All Blogs"}/>
        </div>
    );
}

export default Home;
