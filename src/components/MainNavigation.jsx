import { Link } from "react-router-dom";

//import classes from './MainNavigation.module.css'

function MainNavigation() {
    return <header>
        <nav>
            <ul className="list">
                <li className="list"><Link to="/">Home</Link></li>
                <li className="list"><Link to="/">Items</Link></li>
                <li className="list"><Link to="/containers">Containers</Link></li>
                <li className="list"><Link to="/">Events</Link></li>
                <li className="list"><Link to="/">Lists</Link></li>
                <li className="list"><Link to="/">Contact Us</Link></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;