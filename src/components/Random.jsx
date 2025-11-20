import "./Random.css"
import { useState } from "react";

function Random() {

    const [random, setRandom] = useState('Click the button');

    return (
        <>
            <div className="random">
                <h1>{random}</h1>
                <button onClick={() => setRandom(Math.floor(Math.random() * 10 + 1))}>Random</button>
            </div>
        </>
    );
}

export default Random;