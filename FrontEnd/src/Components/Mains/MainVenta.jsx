import { useEffect, useState } from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
import {URL_VENTAS, URL_VENTAS_ELIMINAR} from '../../Constats/endpoints'
import {Link} from 'react-router-dom'

const MainVenta = () => {
  
  const [data,setData] = useState([])

  const getData = async () => {
   const response = await axios.get(URL_VENTAS)
   console.log(response.data)
  setData(response.data)
  }

  const handleChange = async (id_Venta) => {

    const response = await axios.delete(`${URL_VENTAS_ELIMINAR}${id_Venta}`)
    if(response) {
      alert("Usuario Eliminado!")
    }
  }

useEffect(() => {
  getData()
}, [])


  return (
    <div>
      <h1 className="text-center text-white p-5">MODIFICA EL USUARIO</h1>


      
      <Link to={`/ventas/create`} className='btn text-white bg-success m-5'>CREAR VENTA</Link>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Producto</th>
          <th>Cliente</th>
          <th>Empleado</th>
          <th>Fecha</th>
          <th>Tipo de Pago</th>
          <th>Total Facturado</th>
          <th>ACCIONES</th>
         
        </tr>
      </thead>
      <tbody>
      {data.map((venta) =>
                <tr key={venta.id_Venta}>
                <td>{venta.id_Venta}</td>
                <td>{venta.Producto}</td>
                <td>{venta.NombreCompletoCliente}</td>
                <td>{venta.NombreCompletoEmpleado}</td>
                <td>{venta.FechaVenta}</td>
                <td>{venta.TipoDePago}</td>
                <td>${venta.TotalFacturado}</td>
               
                
                <td>
                  {<Link to={`/ventas/view/${venta.id_Venta}`}>
                  <i className="me-3 text-primary fa-solid fa-eye">
                    </i>
                    </Link>}

                  {<Link to={`/ventas/edit/${venta.id_Venta}`}>

                 
                  <i className="me-3 text-warning fa-solid fa-pen-to-square">
                    
                  </i>
                
                  </Link>}


                  {<button onClick={() => handleChange(venta.id_Venta)}><i className="text-danger fa-solid fa-trash"></i></button>}
                </td>
              </tr>
      )}
      </tbody>
    </Table>
    </div>
  )
}

export default MainVenta
