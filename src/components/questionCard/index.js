import "./styles.css";

function QuestionCard({ preguntaActual, selectedAnswers, setSelectedAnswers }) {
   
    return (
        <div className="card text-bg-warning w-auto">
            <div className="card-title">
                <span>{preguntaActual.id}. </span>
                <span><strong>{preguntaActual.question}</strong></span>
            </div> 
            <div className="card-text">
                {
                    preguntaActual.answers.map((opcion) => (
                        <div key={opcion.id} onChange>
                            <input type="radio" id={`${opcion.id}`} name={opcion.id} value={opcion.answer}></input>
                            <label htmlFor={`${opcion.id}`}>&nbsp;{opcion.answer}</label>
                        </div>
                    ))
                }
            </div>  
        </div> 
    )
}

export default QuestionCard;