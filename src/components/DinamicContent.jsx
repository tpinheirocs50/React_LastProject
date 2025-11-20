import Button from "./Button";
import './DinamicContent.css';
import { useState } from "react";

function DinamicContent() {

    const [data, setData] = useState("Escolha a matéria");

    function updateContent(content) {
        setData(content);
    }

    return (
        <div className="dinamic-content">
            <div className="my-content">
                <p>{data}</p>
            </div>
            <Button handleClick={() => updateContent('javascript')}>Matéria JS</Button>
            <Button handleClick={() => updateContent('react')}>Matéria React</Button>
            <Button handleClick={() => updateContent('sql')}>Matéria SQL</Button>
        </div>
    );
}

export default DinamicContent