import './Delete.css'
import Button from './Button'
import { useState } from 'react'

function Delete() {
    const [del, setDel] = useState(false);

    return (
        <>
            { del && (
                <div className='delete-card'>
                    <h1>Are you sure?</h1>
                    <p>These changes can't be reverted!</p>
                    <button className='proceed-button' onClick={() => setDel(false)}>Proceed</button>
                </div>
            )}
            <Button isActive={del} handleClick={() => (!del ? setDel(true) : setDel(false))}>Delete</Button>
        </>
    );
}

export default Delete