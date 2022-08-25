import { Link } from 'react-router-dom';
import './styles.css'

function AboutMe() {
    return(
        <div className='aboutme'>
            <h1> Esta es la pagina sobre mi</h1>

            <div>
                <div class="h6 fw-bolder text-white">Hablemos?</div>
                <p class="text-muted mb-4">
                    Escribeme a
                    <br />
                    <a href="mailto:hola@lloyka.me">hola@lloyka.me</a>
                </p>
                <div class="h6 fw-bolder text-white">Sigámonos en</div>
                <a class="fs-5 px-2 link-dark" href="https://www.linkedin.com/in/lloykaperez/" target="blank"><i class="bi bi-linkedin text-light"></i></a>
                <a class="fs-5 px-2 link-dark" href="https://www.behance.net/lloykaperez" target="blank"><i class="bi bi-behance text-light"></i></a>
                <a class="fs-5 px-2 link-dark" href="https://www.instagram.com/lloykaperez/" target="blank"><i class="bi bi-instagram text-light"></i></a>
                <a class="fs-5 px-2 link-dark" href="https://github.com/lloykaperez" target="blank"><i class="bi bi-github text-light"></i></a>
            </div>

            <Link to="/" className='link'>Regresar al Juego</Link>
            
           
        </div>
    )
}

export default AboutMe;