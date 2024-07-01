import { useEffect, useState } from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
import {URL_PRODUCTOS, URL_PRODUCTO_ELIMINAR} from '../../Constats/endpoints'
import {Link} from 'react-router-dom'
// import {Row,Col} from "react-bootstrap"


const MainProducto = () => {

    const [data,setData] = useState([])

    const getData = async () => {
     const response = await axios.get(URL_PRODUCTOS)
     console.log(response.data)
    setData(response.data)
    }
  
    const handleChange= async (id_producto) => {
     let response = await axios.delete(`${URL_PRODUCTO_ELIMINAR}${id_producto}`)
      if(response) {
        alert("Producto eliminado!")
      } 
    }
  
 useEffect(()=>{getData()},[])
  return (
    <div>
    <h1 className="text-center text-white p-5">PRODUCTOS</h1>
    <Link to={`/productos/create`} className='btn text-white bg-success m-5'>AGREGAR PRODUCTO</Link>
    
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre Producto</th>
        <th>Descripcion</th>
        <th>Tipo</th>
        <th>Precio</th>
        <th>Imagen Producto</th>
        <th>Disponibilidad</th>
        <th>ACCIONES</th>
      </tr>
    </thead>
    <tbody>
    {data.map((producto) =>

    
              <tr key={producto.id_producto}>
              <td>{producto.id_producto}</td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.tipo}</td>
              <td>{producto.precio}</td>
              <td><img className='image' src={producto.imagenProductos} width={200} alt="" /></td>
              <td>{producto.disponibilidad == 1 ? "Disponible":"No Disponible"}</td>
              <td>
                {<Link to={`/productos/view/${producto.id_producto}`}><i className="me-3 text-primary fa-solid fa-eye"></i></Link>}
                {<Link to={`/productos/edit/${producto.id_producto}`}><i className="me-3 text-warning fa-solid fa-pen-to-square"></i></Link>}
                {<button onClick={() => handleChange(producto.id_producto)}><i className="text-danger fa-solid fa-trash"></i></button>}
              </td>
            </tr>
    )}
    </tbody>
  </Table>

  </div>
  )
}

export default MainProducto
