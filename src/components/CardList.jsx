import Button from "./Button";
import './CardList.css'

function CardList() {

    const arrayExample = ['one', 'two', 'three', 'four', 'five'];

    function writeMessage(message) {
        console.log(message)
    }

    return (
        <div className="card">
            {arrayExample.map((example) => (<Button handleClick={() => writeMessage(example)} key={example}>{example}</Button>))}
        </div>
    );

}

export default CardList