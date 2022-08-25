import { Link } from 'react-router-dom';
import './styles.css'
import avatar from './lloyka.jpg'


function AboutMe() {
    return(
        <div className="aboutme">

            <img src={avatar} className="avatar" alt="avatar"/>

            <h2>Hola! Soy Lloyka Pérez</h2>

            <p className='desarrollo'>Unx gestorx cultural en la ruta a ser unx desarrolladorx web. </p>

            <p className='desarrollo'>
                Esta aplicación web está desarrollada en <a className='linkDesarrollo' href='https://reactjs.org' target={'blank'}> React</a> y fué realizada durante en MeTCaMP WeB 2022, dictado por <a className='linkDesarrollo' href='https://mujeresentecnologia.org/' target={'blank'}>MET [Mujeres en Tecnología]</a>.
            </p>

            <div className='contacto'>
                
                <div class="h6 fw-bolder">Hablemos?</div>
                <p class="text-light mb-4">
                    Escríbeme a
                    <br />
                    <a href="mailto:hola@lloyka.me" className='mail'>hola@lloyka.me</a>
                </p>
                <div class="h6 fw-bolder ">Sigámonos en</div>
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