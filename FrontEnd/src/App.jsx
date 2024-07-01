import {LOGIN, SELECT, ERROR, CLIENTES, HOME, EDITAR_CLIENTE, CREAR_CLIENTE, VER_CLIENTE, STOCK, EDITAR_STOCK, VER_STOCK,CREAR_STOCK, EMPLEADO,CREAR_EMPLEADO, EDITAR_EMPLEADO, VER_EMPLEADO, CREAR_SUCURSAL, SUCURSALES, VER_SUCURSAL,EDITAR_SUCURSAL, NOSOTROS} from './Routes/routes'
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
import HomeEmpleado from "./Pages/Empleado/HomeEmpleado"
import CrearEmpleado from "./Pages/Empleado/CrearEmpleado"
import EditarEmpleado from './Pages/Empleado/EditarEmpleado'
import VerEmpleado from './Pages/Empleado/VerEmpleado'
import CrearSucursal from './Pages/Sucursal/CrearSucursal'
import HomeSucursal from './Pages/Sucursal/HomeSucursal'
import VerSucursal from './Pages/Sucursal/VerSucursal'
import EditarSucursal from './Pages/Sucursal/EditarSucursal'
import { useState } from 'react'
import Nosotros from './Pages/Nosotros'



function App() {
  const [isManager, setIsManager] = useState(false);
  const [isEmpleado, setIsEmpleado] = useState(false);

  const handleUserRoles = (manager, empleado) => {
    setIsManager(manager);
    setIsEmpleado(empleado);
  };
  return (
    <>    
    /* This block of code in the `App` component is setting up the routing for different pages in a
    React application using React Router. Here's a breakdown of what it's doing: */
    <BrowserRouter>
    <Header isManager={isManager} isEmpleado={isEmpleado} setIsEmpleado={setIsEmpleado} setIsManager={setIsManager}/>
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={LOGIN} element={<Login onRolesUpdate={handleUserRoles}/>} />
      <Route path={SELECT} element={<Select />} />
      <Route path={CLIENTES} element={<HomeCliente />} />
      <Route path={CREAR_CLIENTE} element={<CrearCliente />} />
      <Route path={EDITAR_CLIENTE} element={<EditarCliente />} />
      <Route path={VER_CLIENTE} element={<VerCliente />} />
      <Route path={STOCK} element={<HomeStock />} />
       <Route path={VER_STOCK} element={<VerStock />} /> 
      <Route path={EDITAR_STOCK} element={<EditarStock />} />
      <Route path={CREAR_STOCK} element={<CrearStock />} /> 
      <Route path={EMPLEADO} element={<HomeEmpleado/>} />
      <Route path={CREAR_EMPLEADO} element={<CrearEmpleado/>} />
      <Route path={EDITAR_EMPLEADO} element={<EditarEmpleado/>} />
      <Route path={VER_EMPLEADO} element={<VerEmpleado/>} />    
      <Route path={SUCURSALES} element={<HomeSucursal/>}/>
      <Route path={CREAR_SUCURSAL} element={<CrearSucursal/>}/>
      <Route path={EDITAR_SUCURSAL} element={<EditarSucursal/>} />
      <Route path={VER_SUCURSAL} element={<VerSucursal/>} />
      <Route path={ERROR} element={<Home />} />
      <Route path={NOSOTROS} element={<Nosotros/>} />
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
