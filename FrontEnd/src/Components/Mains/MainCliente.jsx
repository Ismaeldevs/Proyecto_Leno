import { useEffect, useState } from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
import {URL_CLIENTES, URL_CLIENTE_ELIMINAR} from '../../Constats/endpoints'
import {Link} from 'react-router-dom'

const MainCliente = () => {

  const [data,setData] = useState([])

  const getData = async () => {
   const response = await axios.get(URL_CLIENTES)
   console.log(response.data)
  setData(response.data)
  }

  const handleChange = async (id_cliente) => {

    const response = await axios.delete(`${URL_CLIENTE_ELIMINAR}${id_cliente}`)
    if(response) {
      alert("Cliente eliminado!")
      
    }
  }

useEffect(() => {
  getData()
}, [])

  return (
    <div>
      <h2 className="text-center text-white p-5">MODIFICA TUS CLIENTES</h2>
      <Link to={`/clientes/create`} className='btn text-white bg-success m-5'>CREAR CLIENTE</Link>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre Completo</th>
          <th>DNI</th>
          <th>Telefono</th>
          <th>Direccion</th>
          <th>Activo</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
      {data.map((client) =>
                <tr key={client.id_cliente}>
                <td>{client.id_cliente}</td>
                <td>{client.nombreCompleto}</td>
                <td>{client.dni}</td>
                <td>{client.telefono}</td>
                <td>{client.direccion}</td>
                <td>{client.activo}</td>
                <td>
                  {<Link to={`/clientes/view/${client.id_cliente}`}><i className="me-3 text-primary fa-solid fa-eye"></i></Link>}
                  {<Link to={`/clientes/edit/${client.id_cliente}`}><i className="me-3 text-warning fa-solid fa-pen-to-square"></i></Link>}
                  {<button onClick={() => handleChange(client.id_cliente)}><i className="text-danger fa-solid fa-trash"></i></button>}
                </td>
              </tr>
      )}
      </tbody>
    </Table>
    </div>
  )
}

export default MainCliente
