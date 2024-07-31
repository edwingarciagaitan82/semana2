import { useSelector  } from "react-redux"
function Header(){
    const user  = useSelector((state) => state.user)
    console.log("user", user)
    return(<>
    <header>
        <h1>Ejemplo Redux 01</h1>
        <ul>
            <li>
                Nombre:  { user.name }
            </li>
            <li>
                Correo: { user.email }
            </li>
        </ul>
    </header>
    </>)
}

export default Header