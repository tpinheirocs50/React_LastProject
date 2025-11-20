import { useState } from "react";
import './CardButton.css';
import Button from "./Button";

// os parametros title e description tens os argumentos passados tipo <CardButton title="título" description="descrição" /> no componente onde o componente CardButton é usado
function CardButton({ title, description }) {

    // esta é a função que é executada pelo botão usado dentro deste componente quando é clicado
    function escreverMensagem() {
        console.log("Mensagem da função dentro do CardButton.jsx");
    }

    return (
        <div className="card-button">
            <h2>{title}</h2>
            <p>{description}</p>
            <Button handleClick={escreverMensagem}>Botão no CardButton.jsx</Button>
        </div>
    );
}

export default CardButton;