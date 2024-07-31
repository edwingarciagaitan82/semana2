import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { changeEmail, userUpdate } from "../redux/userSlice"
function Redux02(){
    
    // const email = useSelector((state) => state.user.email)
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const [ emailT, setEmailT]  = useState(user.email)
    const [ nameT, setNameT] = useState(user.name)
    const hdEmail = (e)=>{
        setEmailT(e.target.value)
    }

    const hdName = (e)=>{
        setNameT(e.target.value)
    }

    const hdUpdate = () =>{
        // dispatch(changeEmail(emailT))
        dispatch(userUpdate({ "name": nameT, "email": emailT }))
        alert("Dato actualizado")
    }
    return(<>
        <h3>info del usuario</h3>
        <input value={ nameT } onChange={ hdName} placeholder="Nombre" ></input>
        <input value={ emailT } onChange={ hdEmail }  placeholder="Correo"></input>
        <input onClick={hdUpdate}  value="Actualizar" type="button"></input>
    </> )
}

export default Redux02