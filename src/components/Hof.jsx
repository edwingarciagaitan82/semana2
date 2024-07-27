import { useEffect } from "react"
import withAlertOnClick from "./withAlertOnClick"
import Input from "./Input"
function Hof(){

    const sayHi = name =>{
        console.log(`Guardar ${ name } `)
        return `Saludando a ${ name } `
    }

    const sayHi2 = name =>{
        console.log(`Eliminar ${ name } `)
    }

    const saludo = (action, action2, params) =>{
        action(params) // actualice un dat db 01
        action2(params) // actualice un dato db 01  //reempplace
    }

    saludo(sayHi,sayHi2, "Talento Tech")

    const texto = sayHi("Persona")
    // useEffect(()=>{
    //     saludo( )
    // },[])
    const SumaBoton = withAlertOnClick(Input)
    return(<>
        <SumaBoton text={ texto }  > Haz click Aqui</SumaBoton>
    </>)
}
export default Hof