import { Link } from "react-router-dom";
import './Menu.css'

export default function Menu() {
    return (
        <div className="menu">
            <Link className="linkButton" to="/">Home</Link>
            <Link className="linkButton" to="/deletepage">Delete</Link>
            <Link className="linkButton" to="/materiareactpage">MateriaReact</Link>
            <Link className="linkButton" to="/discountpage">Discount</Link>
            <Link className="linkButton" to="/loginpage">Login</Link>
            <Link className="linkButton" to="/randompage">Random</Link>
            <Link className="linkButton" to="/otherpage">Other</Link>
            <br/><br/>
            <Link className="linkButton" to="/coursespage">Courses</Link>
            <Link className="linkButton" to="/componentslist">Components</Link>
            <Link className="linkButton" to="/availableplaces">Places</Link>
            <Link className="linkButton" to="/starwarspeople">People</Link>
            <Link className="linkButton" to="/starwarsmovies">Movies</Link>
            <Link className="linkButton" to="/signup">Signup</Link>
        </div>
    );
}