import './styles.css'

function Button({text, onClick, disabled}) {
    return (
        <button disabled={disabled} onClick={onClick} className='btn btn-warning btn-lg'>
            {text}
        </button>
    )
}

export default Button;
