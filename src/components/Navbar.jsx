import ReactIcon from "../assets/react.png"
import UlHorizontal from "./UlHorizontal"
import { withUlComponent } from "./withUlComponent"
function Navbar(){
    
    const rsList= [
        { id: 1, name: "Github", icon : "github"},
        { id: 2, name: " X " , icon : "twitter"}  
      ]

      const RsHOC  = withUlComponent(UlHorizontal, rsList)
    return(<>
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            <img src={ ReactIcon } width="30" height="30" alt=""/>
        </a>
        {/* <UlHorizontal list={ rsList } ></UlHorizontal> */}
        <RsHOC></RsHOC>
    </nav>
    </>)
}
export	default Navbar