import './styles.css'

function Button({text, onClick}) {
    return (
        <button onClick={onClick} className='btn btn-warning'>{text}</button>
    )
}

export default Button;
