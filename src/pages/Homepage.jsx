import { useLocation } from "react-router-dom";

export default function Homepage() {

    const location = useLocation();
    const message = location.state?.message;

    return (
        <>
            {message && <p>{message}</p>}
        </>
    );
}