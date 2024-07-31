import Header from "./Header"
import { useDispatch } from "react-redux"
import { addUser } from "../redux/userSlice"
import { useEffect } from "react"
function Redux01(){
    const dispatch = useDispatch()
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users/1")
    //     .then(response=> response.json())
    //     .then(data =>{ dispatch(addUser(data)) })
    // },[])

    return(<>
    <Header></Header>
    </>)
}
export default Redux01