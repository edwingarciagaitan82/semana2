import { useEffect, useState } from "react"

function Iteracion(){
    const [numeros, setNumeros] = useState([])
    console.log("Hola Talento Tech", 50)


    useEffect(()=>{ console.log("se Ejecuta el use Effect")
        setNumeros(['a','b','c','d','e'])
    },[])

    
    const handleLlenar =() =>{
        setNumeros([1,2,3,4,5])
    }
    return(<>
        <h3>Iterando</h3>
        {/* { listItems } */}
        {numeros.map((number,i)=>(
            <li key={i}>{ number }</li>
        )) }
        <input onClick={handleLlenar} value="LLenar Arreglo" type="button" ></input>
        </>)

}

export default Iteracion
