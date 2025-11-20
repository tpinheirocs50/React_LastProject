import './Button.css'

// o parametro children toma o valor que vai dentro das tags do componente, neste caso <Button></Button> onde é usado o componente
// o parametro handleClick toma como valor a função que queremos que seja executada ao clicar. Está declarada no componente onde o componente Button é usado
function Button({ children, handleClick, isActive }) {

    return (
        <div className='button'>
            {/* Quando o botão é clicado, é executada a função que é passada como argumento, no componente em que o componente Button é usado */}
            <button className={isActive ? 'active' : undefined} onClick={handleClick}>{children}</button>
        </div>
    );
}

export default Button;