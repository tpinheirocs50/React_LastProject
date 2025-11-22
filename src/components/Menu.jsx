import './Menu.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Menu() {

    const { user } = useContext(AuthContext);


    return (
        <div className="menu">
            <Link className="linkButton" to="/">Home</Link>
            <Link className="linkButton" to="/deletepage">Delete</Link>
            <Link className="linkButton" to="/materiareactpage">MateriaReact</Link>
            <Link className="linkButton" to="/discountpage">Discount</Link>
            <Link className="linkButton" to="/loginpage">Login</Link>
            <Link className="linkButton" to="/randompage">Random</Link>
            <Link className="linkButton" to="/otherpage">Other</Link>
            <br /><br />
            <Link className="linkButton" to="/componentslist">Components</Link>
            <Link className="linkButton" to="/availableplaces">Places</Link>
            <Link className="linkButton" to="/starwarspeople">People</Link>
            <Link className="linkButton" to="/starwarsmovies">Movies</Link>
            <Link className="linkButton" to="/signup">Signup</Link>
            {(user && user.role == 'student') && <Link className="linkButton" to="/coursespage">Courses</Link>}
        </div>
    );
}