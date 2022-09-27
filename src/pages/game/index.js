import './styles.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuestionCard from "../../components/questionCard"

const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game() {

    const [ loading, setLoading ] = useState(true);
    const [ questions, setQuestions ] = useState([]);
    const [ selectedAnswers, setSelectedAnswers ] = useState([]);
    const [ result, setResult] = useState(0);

    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(
            data => { 
                console.log(data) 
                setQuestions(data)
            }
        )
        .catch(error => console.log(error))
        .finally(() =>setLoading(false))
    }, [])

    return(
        <div className="container">
            <section className="">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"><Link to="/game">Juego</Link></li>
                    </ol> 
                </nav>
                <h1>Esta es la page del Juego</h1>

                {
                    loading && (
                        <div className="d-flex align-items-center">
                            <strong>Cargando...</strong>
                            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div>
                    )
                }
                {
                    !loading && (
                        <form>
                            {
                                questions.map((pregunta) => {
                                    return <QuestionCard key={pregunta.id} preguntaActual={pregunta}
                                    selectedAnswers={selectedAnswers}
                                    />
                                })
                            }
                        </form>
                    )
                }
            </section>
        </div>
    )
}

export default Game;