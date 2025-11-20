import { useState, useEffect } from "react";
import Movies from "../components/Movies";

export default function StarWarsPeople() {

    const [films, setFilms] = useState(null);

    useEffect(() => {
        fetch("https://swapi.dev/api/films")
            .then((res) => res.json())
            .then((json) => setFilms(json.results));
    }, []);

    return (
        <>
            <Movies obj={films} />
        </>
    );
}