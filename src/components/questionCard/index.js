import "./styles.css";

function QuestionCard({ preguntaActual, selectedAnswers, setSelectedAnswers }) {
   
    console.log(selectedAnswers)

    function seleccionarRespuesta(identificador, valorOpcion){
        const otrasRespuestas = selectedAnswers.filter((respuesta) => respuesta.id !== identificador)
        
        setSelectedAnswers([...otrasRespuestas,
            {
                id: identificador,
                valorOpcion
            }
        ])
    }

    return (
        <div className="card text-bg-warning w-auto">
            <div className="card-title">
                <span>{preguntaActual.id}. </span>
                <span><strong>{preguntaActual.question}</strong></span>
            </div> 
            <div className="card-text">
                {
                    preguntaActual.answers.map((opcion) => (
                        <div 
                        key={opcion.id} 
                        onChange={() => seleccionarRespuesta(preguntaActual.id, opcion.is_correct)}>
                            <input type="radio" 
                                id={`${preguntaActual.id}`} 
                                name={preguntaActual.id} 
                                value={opcion.answer}></input>
                            <label htmlFor={`${preguntaActual.id}`}>&nbsp;{opcion.answer}</label>
                        </div>
                    ))
                }
            </div>  
        </div> 
    )
}

export default QuestionCard;