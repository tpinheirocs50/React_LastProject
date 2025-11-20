import { useState, useEffect } from "react";
import People from "../components/People";

export default function StarWarsPeople() {

    const [people, setPeople] = useState(null);

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
            .then((res) => res.json())
            .then((json) => setPeople(json.results));
    }, []);

    return (
        <>
            <People obj={people} />
        </>
    );
}