import Button from '../../components/button/index'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './styles.css'
import { useState } from 'react'

function Home() {
    const navigate = useNavigate();

    const onClickButton = (url) => {
        navigate(url)
    }

    return(

        <section className='container'>

            <div className='inicio'>
                <div className='elementoinicio'>
                    <Button onClick={() =>onClickButton('/game')} text='MetCamp Quiz'/>
                </div>
                <div className='elementoinicio'>
                    <Link to="/aboutme">Desarrollado por</Link>
                </div>
            </div>
           
        </section>
    )
}

export default Home;
