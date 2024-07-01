
import {LOGIN, SELECT, ERROR, CLIENTES, HOME, EDITAR_CLIENTE, CREAR_CLIENTE, VER_CLIENTE,EMPLEADO,CREAR_EMPLEADO, EDITAR_EMPLEADO, VER_EMPLEADO, CREAR_SUCURSAL, SUCURSALES, VER_SUCURSAL,EDITAR_SUCURSAL} from './Routes/routes'

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
import HomeEmpleado from "./Pages/Empleado/HomeEmpleado"
import CrearEmpleado from "./Pages/Empleado/CrearEmpleado"
import EditarEmpleado from './Pages/Empleado/EditarEmpleado'
import VerEmpleado from './Pages/Empleado/VerEmpleado'
import CrearSucursal from './Pages/Sucursal/CrearSucursal'
import HomeSucursal from './Pages/Sucursal/HomeSucursal'
import VerSucursal from './Pages/Sucursal/VerSucursal'
import EditarSucursal from './Pages/Sucursal/EditarSucursal'



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
      <Route path={EMPLEADO} element={<HomeEmpleado/>} />
      <Route path={CREAR_EMPLEADO} element={<CrearEmpleado/>} />
      <Route path={EDITAR_EMPLEADO} element={<EditarEmpleado/>} />
      <Route path={VER_EMPLEADO} element={<VerEmpleado/>} />    
      <Route path={SUCURSALES} element={<HomeSucursal/>}/>
      <Route path={CREAR_SUCURSAL} element={<CrearSucursal/>}/>
      <Route path={EDITAR_SUCURSAL} element={<EditarSucursal/>} />
      <Route path={VER_SUCURSAL} element={<VerSucursal/>} />
      <Route path={ERROR} element={<Home />} />
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
