import "./styles.css";

function QuestionCard({ preguntaActual, selectedAnswers, setSelectedAnswers, mostrarResultado }) {
   
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

    function monstrarColores(valor) {

        let valorClase = "";
        if (mostrarResultado) {
            if (valor === true) {
                valorClase = "text-success";
            }
            else {
                valorClase = "text-danger"
            }
            
        }
        return valorClase;
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
                            <label htmlFor={`${preguntaActual.id}`}
                            className={monstrarColores(opcion.is_correct)}
                            >&nbsp;{opcion.answer}</label>
                        </div>
                    ))
                }
            </div>  
        </div> 
    )
}

export default QuestionCard;