import Button from '../../components/button/index'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './styles.css'
import letras from '../../assets/letras.png'
import { useState } from 'react'

function Home() {
    const navigate = useNavigate();

    const onClickButton = (url) => {
        navigate(url)
    }

    return(

        <section className='container'>

            <div className='inicio'>

                <img src={letras} className="letras" alt="letras"/>
                <div className='elementoinicio'>
                    <Button onClick={() =>onClickButton('/game')} text='MetCamp Quiz'/>
                </div>
                <div className='elementoinicio'>
                    <Link className='link' to="/aboutme">Desarrollado por</Link>
                </div>
            </div>
           
        </section>
    )
}

export default Home;
