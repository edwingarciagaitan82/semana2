import { useState } from "react"

function Eventos(){
    // const [variable, setVariable ] = useState(0)
    const [veces, setVeces] = useState(0)
    const handlePresioname = () => {
        //codigo
        console.log("Boton Presionado")
        // let total = veces +1
        setVeces(veces+1)
    }

    const handleDigitar = (e) =>{
        console.log(e.target.value)
    }

    return(
        <>
        <button onClick={ handlePresioname } > Presioname </button>
        <div> Veces presionado: { veces }</div>
        <input  onChange={ handleDigitar }  type="text" ></input>
        </>
    )
}
export default Eventos