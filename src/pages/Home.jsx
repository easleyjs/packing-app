import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <h1>My Home Page</h1>
            <Link to="/containers">Containers</Link>
        </>
    )
}

export default HomePage;