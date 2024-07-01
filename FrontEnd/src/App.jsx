import {LOGIN, SELECT, ERROR, CLIENTES, HOME, EDITAR_CLIENTE, CREAR_CLIENTE, VER_CLIENTE, STOCK, EDITAR_STOCK,VER_STOCK,CREAR_STOCK,USUARIO,VER_USUARIO,EDITAR_USUARIO,CREAR_USUARIO} from './Routes/routes'
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
import HomeStock from './Pages/Stock/HomeStock'
import CrearStock from './Pages/Stock/CrearStock'
import EditarStock from './Pages/Stock/EditarStock'
import VerStock from './Pages/Stock/VerStock'
import HomeUsuario from './Pages/Usuarios/HomeUsuario'
import VerUsuario from './Pages/Usuarios/VerUsuario'
import EditarUsuario from './Pages/Usuarios/EditarUsuario'
import CrearUsuario from './Pages/Usuarios/CrearUsuario'



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
      <Route path={STOCK} element={<HomeStock />} />
       <Route path={VER_STOCK} element={<VerStock />} /> 
      <Route path={EDITAR_STOCK} element={<EditarStock />} />
      <Route path={CREAR_STOCK} element={<CrearStock />} /> 
      <Route path={USUARIO} element={<HomeUsuario/>} />
       <Route path={VER_USUARIO} element={<VerUsuario />} /> 
      <Route path={EDITAR_USUARIO} element={<EditarUsuario />} />
      <Route path={CREAR_USUARIO} element={<CrearUsuario />} /> 
      <Route path={ERROR} element={<Home />} />
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
