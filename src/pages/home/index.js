import Button from '../../components/button/index'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './styles.css'

function Home() {
    const navigate = useNavigate();

    const onClickButton = (url) => {
        navigate(url)
    }

    return(
        <div className='home'>

            <div className='button'>
                <Button onClick={() =>onClickButton('/game')} text='MetCamp Quiz'/>
            </div>
           

            <div>
                <Link to="/aboutme">Desarrollado por</Link>
            </div>
        </div>
    )
}

export default Home;