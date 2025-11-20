import './MateriaReact.css'
import Button from './Button'
import { EXAMPLES } from '../data/coreConcepts';
import { useState } from 'react'

function MateriaReact() {

    const [selectedTopic, setSelectedTopic] = useState('components');

    function getDescription(name) {
        setSelectedTopic(name);
    }

    return (
        <div className='materia-react'>
            {selectedTopic && (<div className='dynamic-content'>
                <h1>{EXAMPLES[selectedTopic].title}</h1>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <div className='code-preview'>
                    <pre>
                        <code>
                            {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                </div>
            </div>)}

            <div className='button-menu'>
                <Button isActive={selectedTopic === 'jsx'} handleClick={() => getDescription('jsx')}>JSX</Button>
                <Button isActive={selectedTopic === 'props'} handleClick={() => getDescription('props')}>Props</Button>
                <Button isActive={selectedTopic === 'state'} handleClick={() => getDescription('state')}>State</Button>
                <Button isActive={selectedTopic === null} handleClick={() => getDescription(null)}>null</Button>
            </div>
        </div>
    );
}

export default MateriaReact