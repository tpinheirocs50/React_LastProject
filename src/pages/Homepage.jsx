import { Link, useLocation } from "react-router-dom";
import Button from '../components/Button';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Homepage() {

    const location = useLocation();
    const message = location.state?.message;
    const { logout, user } = useContext(AuthContext);

    return (
        <>
            {message && <p>{message}</p>}
            {!user ? (
                <div>
                    <Link to='/loginpage'>Login</Link>
                    <br/>
                    <Link to='/signup'>Signup</Link>
                </div>
            ) : (
                <Button handleClick={logout}>Logout</Button>
            )}
        </>
    );
}