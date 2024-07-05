import { useEffect, useState } from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
import {URL_PEDIDO, URL_PEDIDO_ELIMINAR} from '../../Constats/endpoints'
import {Link} from 'react-router-dom'
import Buscador from '../Layouts/Buscador'

const MainPedido = () => {

  const [data,setData] = useState([])
  const [dataFiltrada, setDataFiltrada] = useState([]);

  const getData = async () => {
   const response = await axios.get(URL_PEDIDO)
   console.log(response.data)
  setData(response.data)
  setDataFiltrada(response.data);
  }

  const filtrarDatos = (terminoBusqueda) => {
    const busqueda = data.filter(
      (datum) =>
        datum.NombreCompletoCliente.toLowerCase().trim().includes(terminoBusqueda) ||
        datum.NombreCompletoEmpleado.toLowerCase().trim().includes(terminoBusqueda) ||
        datum.NombreProducto.toLowerCase().trim().includes(terminoBusqueda)||
        datum.NombreSucursal.toLowerCase().trim().includes(terminoBusqueda)||
        datum.fechaDetallePedido.toLowerCase().trim().includes(terminoBusqueda)
    );
    setDataFiltrada(busqueda);
  };

  const handleChange = async (id) => {

    try {

      const response = await axios.put(`${URL_PEDIDO_ELIMINAR}${id}`)
      if(response) {
        alert("Pedido eliminado!")
        
      }
    } catch (error) {
      console.log(error)
    }
  }

useEffect(() => {
  getData()
}, [])

  return (
    <div>
      <h1 className="text-center text-white p-5">MODIFICA TUS PEDIDOS</h1>
      <Buscador filtrarDatos={filtrarDatos} />
      <Link to={`/pedidos/create`} className='btn text-white bg-success m-5'>CREAR PEDIDO</Link>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Producto</th>
          <th>Cliente</th>
          <th>Sucursal</th>
          <th>Empleado</th>
          <th>Fecha</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
      {dataFiltrada.map((pedido) =>
                <tr key={pedido.id_DetallePedido}>
                <td>{pedido.id_DetallePedido}</td>
                <td>{pedido.NombreProducto}</td>
                <td>{pedido.NombreCompletoCliente}</td>
                <td>{pedido.NombreSucursal}</td>
                <td>{pedido.NombreCompletoEmpleado}</td>
                <td>{pedido.fechaDetallePedido}</td>
                <td>
                  {<Link to={`/pedidos/view/${pedido.id_DetallePedido}`}><i className="me-3 text-primary fa-solid fa-eye"></i></Link>}
                  {<Link to={`/pedidos/edit/${pedido.id_DetallePedido}`}><i className="me-3 text-warning fa-solid fa-pen-to-square"></i></Link>}
                  {<button onClick={() => handleChange(pedido.id_DetallePedido)}><i className="text-danger fa-solid fa-trash"></i></button>}
                </td>
              </tr>
      )}
      </tbody>
    </Table>
    <div className='d-flex justify-content-center'>
    <Link to={'/select'} className= " btn btn-danger w-25 mb-5 mt-3 " >Volver a inicio</Link>
    </div>
    </div>
  )
}

export default MainPedido