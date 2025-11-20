import { useState, useRef } from 'react';
import Button from './Button';
import './Discount.css'

function Discount() {
    let [price, setPrice] = useState(100);
    // let [locked, setLocked] = useState(false);
    let isLocked = useRef(false);

    function applyDiscount(price) {
        !isLocked.current ? setPrice(price * 0.75) : alert('Discount already applied');
        // setLocked(true);
        isLocked.current = true;
    }

    return (
        <div className='discount'>
            <p>{price}</p>
            <Button handleClick={() => applyDiscount(price)}>Apply Discount</Button>
        </div>
    );
}

export default Discount