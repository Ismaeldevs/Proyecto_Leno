import {LOGIN, SELECT, ERROR, CLIENTES,PRODUCTOS, HOME, EDITAR_CLIENTE, CREAR_CLIENTE, VER_CLIENTE,VER_PRODUCTO, EDITAR_PRODUCTO} from './Routes/routes'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Select from './Pages/Select'
import HomeCliente from './Pages/Cliente/HomeCliente'
import HomeProducto from './Pages/Producto/HomeProducto'
import EditarCliente from './Pages/Cliente/EditarCliente'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import CrearCliente from './Pages/Cliente/CrearCliente'
import VerCliente from './Pages/Cliente/VerCliente'
import VerProducto from './Pages/Producto/VerProducto'
import Header from './Components/Layouts/Header'
import Footer from './Components/Layouts/Footer'
import EditarProducto from './Pages/Producto/EditarProducto'


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
      <Route path={PRODUCTOS} element={<HomeProducto/>} />
      <Route path={CREAR_CLIENTE} element={<CrearCliente />} />
      <Route path={EDITAR_CLIENTE} element={<EditarCliente />} />
      <Route path={EDITAR_PRODUCTO} element={<EditarProducto />} />
      <Route path={VER_CLIENTE} element={<VerCliente />} />
      <Route path={VER_PRODUCTO} element={<VerProducto />} />
      <Route path={ERROR} element={<Home />} />
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
