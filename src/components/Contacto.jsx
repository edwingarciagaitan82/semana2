import { useRef } from "react"
function Contacto(){
    const ref_nombre = useRef() 
    const handleEnviar= ()=>{
        console.log("enviar")
        console.log("el nombre ", ref_nombre.current.value)
        const nombre = ref_nombre.current.value

        //enviar datos al BK  
    }

    const handleLimpiar =() =>{
        ref_nombre.current.value = ""
    }
    return(
        <>
        <input ref={ref_nombre} placeholder="Escriba Aqui su Nombre" className="form-control" type="text"></input>
        <input onClick={handleEnviar}  value="Enviar" type="button"></input>
        <input onClick={ handleLimpiar } value="Limpiar" type="button"></input>
        </>
    )
}
export default Contacto