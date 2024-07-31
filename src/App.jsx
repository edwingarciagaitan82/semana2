import './App.css'
import {  BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom'
import Hof from './components/Hof'
import Hof2 from './components/Hof2'
import Hof3 from './components/Hof3'
import Hof4 from './components/Hof4'
import withAlertOnClick from './components/withAlertOnClick'
import Button from './components/Button'
import Usuarios from './components/Usuarios'
import Navbar from './components/Navbar'
import UlVertical from './components/UlVertical'
import { withUlComponent } from './components/withUlComponent'
import Redux01 from './components/Redux01'
import Redux02 from './components/Redux02'
import Redux03 from './components/Redux03'
function App() {
  const AlertButton = withAlertOnClick(Button)
  const rsList= [
    { id: 1, name: "Github", icon : "github"},
    { id: 2, name: " X " , icon : "twitter"}  
  ]
  const RsHOC = withUlComponent(UlVertical,rsList)
   return (
    <>
       <Router>
       <Navbar  ></Navbar>
        <div className="container">
          <div className='row'>
            <div className='col-4'><Link to={"/"}>Principal</Link></div>
            <div className='col-4'><Link to={"/enlace1/"}  >HOF</Link></div>
            <div className='col-4'><Link to={"/enlace2/"}> HOF 2 </Link></div>
            <div className='col-4'><Link to={"/enlace3/"}>Hof 3</Link></div>
            <div className='col-4'><Link to={"/enlace4/"}>Hof 4</Link></div>
            <div className='col-4'><Link to={"/enlace5/"}>Hoc </Link></div>
            <div className='col-4'><Link to={"/enlace6/"}>Usuarios </Link></div>
            <div className='col-4'><Link to={"/enlace7/"}>Redux 01 </Link></div>
            <div className='col-4'><Link to={"/enlace8/"}>Redux 02 </Link></div>
            <div className='col-4'><Link to={"/enlace9/"}>Redux 03 </Link></div>
          </div>
          <div className="row">
           
          </div>
        </div>
        <div className='container'>
          <Routes>
            <Route path="/" element={ <></>}  ></Route>
            <Route path="/enlace1/" element={ <Hof></Hof>} ></Route>
            <Route path="/enlace2/" element={ <Hof2></Hof2>}></Route>
            <Route path="/enlace3/" element={ <Hof3></Hof3> }></Route>
            <Route path="/enlace4/" element={ <Hof4></Hof4> }></Route>
            <Route path="/enlace5/" element={  <AlertButton text={ "Boton Presionado" } >Presioname</AlertButton> }></Route>
            <Route path="/enlace6/" element={ <Usuarios></Usuarios> } ></Route>
            <Route path="/enlace7/" element={ <Redux01></Redux01> } ></Route>
            <Route path="/enlace8/" element={ <Redux02></Redux02> } ></Route>
            <Route path="/enlace9/" element={ <Redux03></Redux03> } ></Route>
          </Routes>
        </div>
        <footer>
          <div className="row">
            <div className='col-4'></div>
            <div className='col-4'></div>
            <div className='col-4'> 
              {/* <UlVertical list= { rsList }  ></UlVertical> */}
              <RsHOC></RsHOC>
            </div>
          </div>
        </footer>

       </Router>
    </>
  )
}

export default App
