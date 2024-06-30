import {LOGIN, SELECT, ERROR, CLIENTES, HOME, EDITAR_CLIENTE, CREAR_CLIENTE, VER_CLIENTE} from './Routes/routes'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Select from './Pages/Select'
import HomeCliente from './Pages/Cliente/HomeCliente'
import EditarCliente from './Pages/Cliente/EditarCliente'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import CrearCliente from './Pages/Cliente/CrearCliente'
import VerCliente from './Pages/Cliente/VerCliente'
import Header from './Components/Layouts/Header'
import Footer from './Components/Layouts/Footer'


function App() {

  return (
    <>    
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={LOGIN} element={<Login/>} />
      <Route path={SELECT} element={<Select />} />
      <Route path={CLIENTES} element={<HomeCliente />} />
      <Route path={CREAR_CLIENTE} element={<CrearCliente />} />
      <Route path={EDITAR_CLIENTE} element={<EditarCliente />} />
      <Route path={VER_CLIENTE} element={<VerCliente />} />
      <Route path={ERROR} element={<Home />} />
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
