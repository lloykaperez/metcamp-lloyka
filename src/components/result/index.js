import bien from '../../assets/bien.png';
import medio from '../../assets/medio.png';
import mal from '../../assets/mal.png';
import { useEffect, useState } from 'react';

function Result({ valorResultado}) {
    const [imagen, setImagen] = useState()

    function getImageSource(valorResultado) {
        if (valorResultado <= 4) setImagen(mal)
        else if (valorResultado >4 && valorResultado <= 7) setImagen(medio)
        else setImagen(bien)

    }

    useEffect(() => {
        getImageSource(valorResultado)
    }, [valorResultado])
   
    return (
        <>
            {/* <p>{valorResultado} respuestas correctas de {`${questions.length}`}</p> */}
            <p>{valorResultado} respuestas correctas!</p>
            <img src={imagen}></img>


        </>
    )

}

export default Result;