import { Link } from 'react-router-dom';
import './styles.css'

function FourOFour() {

    return (
        <div className='error'>
            <i class="bi bi-emoji-dizzy text-light bi-lg" ></i>
            <h4>No encontré lo que estabas buscando</h4>
            <Link to="/" className='link'>Regresar al Juego</Link>
        </div>
    )
}

export default FourOFour;

