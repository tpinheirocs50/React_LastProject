import reactLogo from '../assets/react.svg'
import './ComponentsCard.css'

export default function ComponentsCard({ title, description }) {
    return (
        <div className='components-card'>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={reactLogo} alt="" />
        </div>
    );
}