import './App.css'
import {  BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom'
import Saludo from './components/Saludo'
import Eventos from './components/Eventos'
import Contacto from './components/Contacto'
import Iteracion from './components/Iteracion'
function App() {
  return (
    <>
       <Router>
        <div className="container">
          <div className='row'>
            {/* <div className='col-4'><Link to={"/"}>Principal</Link></div> */}
            <div className='col-4'><Link to={"/saludo/"}  >Experiencia</Link></div>
            <div className='col-4'><Link to={"/contacto/"}>Contacto </Link></div>
            <div className='col-4'><Link to={"/iteracion/"}>Iteracion </Link></div>
          </div>
        </div>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Saludo/>}  ></Route>
            <Route path="/saludo/" element={ <Eventos></Eventos>} ></Route>
            <Route path="/contacto/" element={ <Contacto></Contacto> }></Route>
            <Route path="/iteracion/" element={ <Iteracion></Iteracion> }></Route>
          </Routes>
        </div>
       </Router>
    </>
  )
}

export default App
